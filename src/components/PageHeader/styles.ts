import { StyleSheet } from "react-native";
import { Archivo_700Bold } from "@expo-google-fonts/archivo";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#8257e5",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 250,
    /* marginVertical: 40, */
    marginTop: 30,
    marginBottom: 40,
  },
});

export default styles;
