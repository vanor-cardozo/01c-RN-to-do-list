import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/global";
import { fonts } from "../../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    color: colors["gray-100"],
    justifyContent: "space-between",
    marginTop: 16,
  },

  tasksContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  counter: {
    backgroundColor: colors["gray-400"],
    color: colors["gray-200"],
    padding: 6,
    borderRadius: 50,
    marginLeft: 6,
    fontFamily: fonts["inter-700"],
  },

  tasksCreated: {
    color: colors["blue"],
    fontFamily: fonts["inter-700"],
    fontSize: 14,
  },

  tasksDone: {
    color: colors["purple"],
    fontFamily: fonts["inter-700"],
    fontSize: 14,
  },
});
