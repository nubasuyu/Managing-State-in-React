import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  // State for tasks
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  // Update existing task
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  // Delete task
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
        onToggle={toggleComplete}
      />
    </div>
  );
}

export default App;
