import { StyleSheet, Text, View } from "react-native";
import { BoardIcon } from "../../../../assets/BoardIcon";
import { fonts } from "../../../styles/fonts";
import { colors } from "../../../styles/global";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <BoardIcon />
      </View>
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textRegular}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  textBold: {
    fontFamily: fonts["inter-700"],
    color: colors["gray-300"],
  },

  iconContainer: {
    marginVertical: 24,
  },

  textRegular: {
    fontFamily: fonts["inter-400"],
    color: colors["gray-300"],
  },
});
