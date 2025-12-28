import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Task Manager</h2>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

const styles = {
  container: { maxWidth: "420px", margin: "40px auto", textAlign: "center" },
  heading: { fontFamily: "Arial", marginBottom: "20px" },
};

export default App;
