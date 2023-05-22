import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../../../../../styles/global";
import { fonts } from "../../../../../styles/fonts";

type Props = {
  taskName: string;
  checked: boolean;
};

export function TaskText({ taskName, checked }: Props) {
  const styleText = checked ? styles.textCrossed : styles.text;
  return <Text style={styleText}>{taskName}</Text>;
}

const styles = StyleSheet.create({
  textCrossed: {
    color: colors["gray-300"],
    textDecorationLine: "line-through",
    marginLeft: 12,
    fontSize: 14,
    fontFamily: fonts["inter-400"],
  },
  text: {
    color: colors["gray-100"],
    marginLeft: 12,
    fontSize: 14,
    fontFamily: fonts["inter-400"],
  },
});
