import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { styles } from "./styles";
import { TaskInput } from "./components/TaskInput";
import { Header } from "./components/Header";
import { TasksCounter } from "./components/TasksCounter";
import { Divider } from "./components/Divider";
import { EmptyList } from "./components/EmptyList";
import { Task } from "./components/Task";

type Task = {
  id: string;
  name: string;
  done: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCounter, setTasksCounter] = useState(0);
  const [tasksDoneCounter, setTasksDoneCounter] = useState(0);

  function handleAddTask(task: string) {
    let newTask = {
      id: String(tasks.length + 1),
      name: task,
      done: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleUpdateTasks(id: string) {
    const tempTasks = [...tasks];
    const findTask = tempTasks.findIndex((task) => task.id === id);
    if (findTask !== -1) {
      const taskStatus = tempTasks[findTask].done;
      const changeTaskStatus = !taskStatus;
      tempTasks[findTask] = { ...tempTasks[findTask], done: changeTaskStatus };
      setTasks(tempTasks);
    }
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Deseja remover a tarefa?", "confirme a remoção da tarefa", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task.id !== id)),
      },
      { text: "Não" },
    ]);
  }

  useEffect(() => {
    const tasksDone = tasks.filter((task) => task.done === true);
    setTasksCounter(tasks.length);
    setTasksDoneCounter(tasksDone.length);
  }, [tasks]);

  return (
    <View style={styles.homeContainer}>
      <Header />
      <View style={styles.componentsContainer}>
        <TaskInput addTask={handleAddTask} />
        <TasksCounter
          tasksCounter={tasksCounter}
          tasksDone={tasksDoneCounter}
        />
        <Divider />
        {tasks.length === 0 ? (
          <EmptyList />
        ) : (
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Task
                taskId={item.id}
                taskName={item.name}
                taskStatus={item.done}
                changeTaskStatus={handleUpdateTasks}
                removeTask={handleRemoveTask}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}
