import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../../../../styles/global";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  checked: boolean;
};

export function ButtonRounded({ checked }: Props) {
  const buttonStyle = checked ? styles.buttonChecked : styles.button;
  return (
    <View style={buttonStyle}>
      {checked && <AntDesign name="check" size={14} color="#FFF" />}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 9,
    height: 18,
    width: 18,
    borderColor: colors["blue-dark"],
  },
  buttonChecked: {
    borderWidth: 2,
    borderRadius: 9,
    height: 18,
    width: 18,
    borderColor: colors["purple-dark"],
    backgroundColor: colors["purple-dark"],
    justifyContent: "center",
    alignItems: "center",
  },
});
