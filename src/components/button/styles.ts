import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#fff",
    padding: 0,
    margin: 0,
  },
});
