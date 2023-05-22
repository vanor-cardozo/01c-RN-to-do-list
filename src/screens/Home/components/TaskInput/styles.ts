import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/global";

export const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    padding: 24,
    marginTop: -52,
  },

  input: {
    flex: 1,
    backgroundColor: colors["gray-500"],
    borderColor: colors["gray-700"],
    borderWidth: 1,
    borderRadius: 5,
    color: colors["gray-100"],
    fontSize: 16,
    paddingLeft: 16,
  },

  button: {
    width: 52,
    height: 52,
    marginLeft: 4,
    borderColor: colors["gray-700"],
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors["blue-dark"],
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors["gray-100"],
  },
});
