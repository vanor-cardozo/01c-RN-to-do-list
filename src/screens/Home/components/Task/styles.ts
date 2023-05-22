import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/global";

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    backgroundColor: colors["gray-500"],
    borderColor: colors["gray-400"],
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 6,
  },

  buttonAndTaskContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
