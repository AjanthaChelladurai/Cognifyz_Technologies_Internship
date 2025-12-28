import React, { useState } from "react";

export default function TaskItem({ task, column, updateTask, deleteTask }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    updateTask(column, task.id, text);
    setEdit(false);
  };

  return (
    <div className="p-2 border rounded flex items-center justify-between bg-slate-50">
      {edit ? (
        <input
          className="flex-1 mr-2 px-2 py-1 border rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => e.key === "Enter" && save()}
        />
      ) : (
        <span onClick={() => setEdit(true)}>{task.text}</span>
      )}
      <button
        onClick={() => deleteTask(column, task.id)}
        className="text-red-600 ml-2"
      >
        ✕
      </button>
    </div>
  );
}
