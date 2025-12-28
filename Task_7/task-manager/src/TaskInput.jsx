import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

const styles = {
  input: { padding: "10px", width: "70%", marginRight: "5px" },
  button: { padding: "10px 16px", cursor: "pointer" },
};

export default TaskInput;
