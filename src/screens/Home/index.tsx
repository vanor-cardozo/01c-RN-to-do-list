import { View } from "react-native";
import { styles } from "./styles";
import { TaskInput } from "./components/TaskInput";
import { Header } from "./components/Header";

export function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <TaskInput />
    </View>
  );
}
