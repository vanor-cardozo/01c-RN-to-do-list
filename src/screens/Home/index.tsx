import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { TaskInput } from "./components/TaskInput";
import { Header } from "./components/Header";
import { TasksCounter } from "./components/TasksCounter";
import { Divider } from "./components/Divider";
import { EmptyList } from "./components/EmptyList";
import { Task } from "./components/Task";

export function Home() {
  const mockTask = [
    {
      id: "1001",
      name: "lavar o carrolavar o carrolavar o carrolavar o carrolavar o carrolavar o carro",
      done: false,
    },
    {
      id: "1002",
      name: "Comprar leite",
      done: false,
    },
    {
      id: "1003",
      name: "Agendar dermatologista",
      done: false,
    },
    {
      id: "1004",
      name: "Pagar escola do Bento",
      done: true,
    },
  ];
  const [tasks, setTasks] = useState(mockTask);
  const [tasksCounter, setTasksCounter] = useState(0);
  const [tasksDoneCounter, setTasksDoneCounter] = useState(0);

  function updateTasks(id: string) {
    const tempTasks = [...tasks];
    const findTask = tempTasks.findIndex((task) => task.id === id);
    if (findTask !== -1) {
      const taskStatus = tempTasks[findTask].done;
      const changeTaskStatus = !taskStatus;
      tempTasks[findTask] = { ...tempTasks[findTask], done: changeTaskStatus };
      setTasks(tempTasks);
    }
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
        <TaskInput />
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
                changeTaskStatus={updateTasks}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
}
