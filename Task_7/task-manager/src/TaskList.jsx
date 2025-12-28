function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            ...styles.item,
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <span onClick={() => toggleTask(task.id)} style={styles.text}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: { padding: 0 },
  item: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  text: { cursor: "pointer" },
  deleteBtn: { cursor: "pointer", color: "red", background: "none", border: "none" },
};

export default TaskList;
