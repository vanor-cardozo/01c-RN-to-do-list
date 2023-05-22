import { View } from "react-native";
import { styles } from "./styles";
import { TaskInput } from "./components/TaskInput";
import { Header } from "./components/Header";
import { TasksCounter } from "./components/TasksCounter";
import { Divider } from "./components/Divider";
import { EmptyList } from "./components/EmptyList";

export function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <View style={styles.componentsContainer}>
        <TaskInput />
        <TasksCounter />
        <Divider />
        <EmptyList />
      </View>
    </View>
  );
}
