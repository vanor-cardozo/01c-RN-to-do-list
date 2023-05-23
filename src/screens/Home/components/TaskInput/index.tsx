import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../../styles/global";
import { PlusIcon } from "../../../../../assets/PlusIcon";
import { useState } from "react";

type Props = {
  addTask: (task: string) => void;
};

export function TaskInput({ addTask }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleSubmit() {
    addTask(newTask);
    setNewTask("");
  }

  const inputStyle = isFocused ? styles.inputSelected : styles.input;

  return (
    <View style={styles.form}>
      <TextInput
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors["gray-300"]}
        onChangeText={setNewTask}
        value={newTask}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          <PlusIcon />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
