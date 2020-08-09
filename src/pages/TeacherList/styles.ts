import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },

  teacherList: {
    marginTop: -45,
  },

  searchForm: {
    marginTop: -20,
    marginBottom: 24,
  },

  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },

  input: {
    backgroundColor: "#fff",
    height: 54,
    borderRadius: 8,
    justifyContent: "center",
    padding: 16,
    marginTop: 4,
    marginBottom: 10,
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBlock: {
    width: "48%",
  },

  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 6,
  },

  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
