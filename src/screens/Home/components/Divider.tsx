import { StyleSheet, View } from "react-native";
import { colors } from "../../../styles/global";

export function Divider() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: colors["gray-400"],
    marginVertical: 16,
  },
});
