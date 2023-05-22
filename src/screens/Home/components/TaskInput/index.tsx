import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../../styles/global";
import { PlusIcon } from "../../../../../assets/PlusIcon";

export function TaskInput() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
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
