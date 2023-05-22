import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ButtonRounded } from "./components/ButtonRounded";
import { TaskText } from "./components/TaskText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/global";

export function Task() {
  const [status, setStatus] = useState(false);
  function handleCheckTask() {
    setStatus(!status);
  }

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={handleCheckTask}>
        <View style={styles.buttonAndTaskContainer}>
          <ButtonRounded checked={status} />

          <TaskText
            taskName={"nova tarefa adicionada nova tarefa adicionada "}
            checked={status}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="trash-outline" size={22} color={colors["gray-300"]} />
      </TouchableOpacity>
    </View>
  );
}
