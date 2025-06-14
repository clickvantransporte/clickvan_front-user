import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 74,
    fontWeight: 500,
    color: "#222831",
    justifyContent: "flex-start",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: 500,
    padding: 0,
    margin: 0,
  },
});
