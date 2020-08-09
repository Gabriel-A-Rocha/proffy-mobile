import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import PageHeader from "../../components/PageHeader";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import TeacherItem from "../../components/TeacherItem";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

function TeacherList() {
  const [filtersVisible, setFiltersVisible] = useState(true);

  function handleToggleFiltersVisible() {
    setFiltersVisible(!filtersVisible);
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
              placeholder="Subject"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Weekday</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Weekday"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Time"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default TeacherList;
