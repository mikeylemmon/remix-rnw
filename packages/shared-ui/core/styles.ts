import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  linkButton: {
    marginTop: 40,
    padding: 15,
    backgroundColor: "#06a",
    borderRadius: 10,
    textDecorationLine: "none",
    overflow: "hidden",
  },
  linkButtonText: {
    color: "white",
  },
});

export const linkButton = styles.linkButton;
export const linkButtonText = styles.linkButtonText;
export const screen = styles.screen;
