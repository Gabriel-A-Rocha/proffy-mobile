import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavotiteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars2.githubusercontent.com/u/60102062?s=460&u=d46cf65e8d14695ff7ef324c1bc2d903d8248f24&v=4.png",
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gabriel Rocha</Text>
          <Text style={styles.subject}>Astrology</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Expert in UFO observation
        {"\n"}
        {"\n"}
        Expert in UFO observation Expert in UFO observation Expert in UFO
        observation Expert in UFO observation Expert in UFO observationExpert in
        UFO observationExpert in UFO observationExpert in UFO observationExpert
        in UFO observationExpert in UFO observation
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price per hour:{"  "}
          <Text style={styles.priceValue}>U$ 45</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Contact teacher</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
