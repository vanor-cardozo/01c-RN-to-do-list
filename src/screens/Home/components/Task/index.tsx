import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ButtonRounded } from "./components/ButtonRounded";
import { TaskText } from "./components/TaskText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/global";

type Props = {
  taskId: string;
  taskName: string;
  taskStatus: boolean;
  changeTaskStatus: (taskId: string) => void;
  removeTask: (taskId: string) => void;
};

export function Task({
  taskId,
  taskName,
  taskStatus,
  changeTaskStatus,
  removeTask,
}: Props) {
  function handleChangeTask() {
    changeTaskStatus(taskId);
  }

  function handleRemoveTask() {
    removeTask(taskId);
  }

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={handleChangeTask}>
        <View style={styles.buttonAndTaskContainer}>
          <ButtonRounded checked={taskStatus} />

          <TaskText taskName={taskName} checked={taskStatus} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRemoveTask}>
        <Ionicons name="trash-outline" size={22} color={colors["gray-300"]} />
      </TouchableOpacity>
    </View>
  );
}
