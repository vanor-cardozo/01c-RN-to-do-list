import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../../styles/global";
import { PlusIcon } from "../../../../../assets/PlusIcon";
import { useState } from "react";

export function TaskInput() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = isFocused ? styles.inputSelected : styles.input;

  return (
    <View style={styles.form}>
      <TextInput
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors["gray-300"]}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          <PlusIcon />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
