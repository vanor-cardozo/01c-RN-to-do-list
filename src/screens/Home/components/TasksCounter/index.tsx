import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  tasksCounter: number;
  tasksDone: number;
};

export function TasksCounter({ tasksCounter, tasksDone }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.tasksCreated}>Criadas</Text>
        <Text style={styles.counter}>{tasksCounter}</Text>
      </View>

      <View style={styles.tasksContainer}>
        <Text style={styles.tasksDone}>Concluídas</Text>
        <Text style={styles.counter}>{tasksDone}</Text>
      </View>
    </View>
  );
}
