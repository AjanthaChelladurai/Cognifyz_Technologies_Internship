// src/components/TaskBoard.jsx
import React, { useState } from "react";
import TaskColumn from "./TaskColumn.jsx";

export default function TaskBoard() {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: []
  });

  // ✅ Add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text
    };

    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask]
    }));
  };

  // ✅ Update (edit or move) a task
  const updateTask = (id, updatedTask, fromColumn, toColumn = fromColumn) => {
    setTasks((prev) => {
      const updatedFrom = prev[fromColumn].filter((t) => t.id !== id);
      const updatedTo =
        fromColumn === toColumn
          ? [...updatedFrom, updatedTask]
          : [...prev[toColumn], updatedTask];

      return {
        ...prev,
        [fromColumn]: updatedFrom,
        [toColumn]: updatedTo
      };
    });
  };

  // ✅ Delete a task
  const deleteTask = (id, column) => {
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column].filter((t) => t.id !== id)
    }));
  };

  return (
    <div>
      {/* ✅ Add Task Input */}
      <AddTaskInput addTask={addTask} />

      {/* ✅ Task Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <TaskColumn
          title="todo"
          items={tasks.todo}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />

        <TaskColumn
          title="inProgress"
          items={tasks.inProgress}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />

        <TaskColumn
          title="done"
          items={tasks.done}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

// ✅ Simple Add Task Input Component
function AddTaskInput({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
        placeholder="Enter a task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 rounded text-white"
      >
        Add
      </button>
    </form>
  );
}
