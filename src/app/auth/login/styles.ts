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
    fontWeight: 700,
    color: "#222831",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textColor: {
    color: "#7B7F9E",
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
  socialButton: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: "bold",
    color: "222831",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222831",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#555",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 5,
  },
});
