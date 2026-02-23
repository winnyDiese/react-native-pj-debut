import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";

type Task = {
  id: string;
  title: string;
};

export default function AppScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showDetails, setShowDetails] = useState(false);

  // Ajouter une tâche
  const addTask = () => {
    if (!task.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Supprimer une tâche
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Composant Home
  const HomeScreen = () => (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ma Todo List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter une tâche..."
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.task}
            onPress={() => deleteTask(item.id)}
          >
            <Text style={styles.taskText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => setShowDetails(true)}
      >
        <Text style={styles.buttonText}>Voir Détails</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  // Composant Details
  const DetailsScreen = () => (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>Page Détails</Text>
      <Button title="Retour" onPress={() => setShowDetails(false)} />
    </View>
  );

  return showDetails ? <DetailsScreen /> : <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsText: {
    fontSize: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#007bff",
    marginLeft: 10,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  task: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});