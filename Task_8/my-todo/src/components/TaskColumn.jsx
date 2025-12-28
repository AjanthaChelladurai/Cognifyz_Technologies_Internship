// src/components/TaskColumn.jsx
import React from "react";
import TaskItem from "./TaskItem.jsx";

export default function TaskColumn({
  title,
  items = [],          // ✅ Default to empty array
  updateTask,
  deleteTask
}) {
  // ✅ Correct label keys (must match TaskBoard titles)
  const label = {
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done"
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-lg mb-3">
        {label[title] ?? "Tasks"}   {/* ✅ Prevent undefined title */}
      </h2>

      <div className="space-y-2">
        {(items ?? []).map((task) => (   // ✅ Safe fallback
          <TaskItem
            key={task.id}
            task={task}
            column={title}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>

      {/* ✅ Optional: show empty state message */}
      {items?.length === 0 && (
        <p className="text-gray-500 text-sm text-center mt-3">
          No tasks here
        </p>
      )}
    </div>
  );
}
