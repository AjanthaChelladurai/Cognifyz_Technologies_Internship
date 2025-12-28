import React, { useState } from "react";

export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const submit = () => {
    if (text.trim() !== "") {
      addTask(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex mb-6 gap-2">
      <input
        className="flex-1 px-4 py-2 border rounded"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button
        onClick={submit}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Add
      </button>
    </div>
  );
}
