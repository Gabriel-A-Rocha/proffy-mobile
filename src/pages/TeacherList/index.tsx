import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import PageHeader from "../../components/PageHeader";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import AsyncStorage, {
  AsyncStorageStatic,
} from "@react-native-community/async-storage";
//import { Teacher } from "../../components/TeacherItem/index";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(true);

  const [subject, setSubject] = useState("");
  const [week_day, setWeek_Day] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  /*   useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  ); */

  function handleToggleFiltersVisible() {
    setFiltersVisible(!filtersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Choose your teacher:"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {filtersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Subject"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Weekday</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeek_Day(text)}
                  placeholder="Weekday"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Time"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
