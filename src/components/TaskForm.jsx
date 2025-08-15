import React, { useState, useEffect } from "react";

function TaskForm({ onAdd, onUpdate, editingTask, setEditingTask }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  // Pre-fill form if editing a task
  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.taskName);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !description.trim()) {
      alert("Please fill out both fields.");
      return;
    }

    if (editingTask) {
      onUpdate(editingTask.id, {
        ...editingTask,
        taskName,
        description,
      });
      setEditingTask(null);
    } else {
      onAdd({ taskName, description });
    }

    setTaskName("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;
