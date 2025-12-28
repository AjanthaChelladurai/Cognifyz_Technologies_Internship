const STORAGE_KEY = "todo_tasks_drag_v1";

export const loadTasks = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      todo: [],
      inprogress: [],
      done: []
    };
  } catch {
    return { todo: [], inprogress: [], done: [] };
  }
};

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
