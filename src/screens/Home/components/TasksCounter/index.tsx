import { Text, View } from "react-native";
import { styles } from "./styles";

export function TasksCounter() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <Text style={styles.tasksCreated}>Criadas</Text>
        <Text style={styles.counter}>8</Text>
      </View>

      <View style={styles.tasksContainer}>
        <Text style={styles.tasksDone}>Concluídas</Text>
        <Text style={styles.counter}>10</Text>
      </View>
    </View>
  );
}
