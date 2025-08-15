import React from "react";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.taskName}</h3>
      <p>{task.description}</p>
      <div className="actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
