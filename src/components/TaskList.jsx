import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

function TaskList({ tasks, onDelete, onUpdate, onToggle }) {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      {editingTask && (
        <TaskForm
          onUpdate={onUpdate}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />
      )}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={setEditingTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
