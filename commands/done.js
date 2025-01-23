import Conf from "conf";
const config = new Conf({ projectName: "todo" });

export function markAsDone({ tasks }) {
  const todoList = config.get("todos") ?? [];

  tasks.forEach((task) => {
    if (todoList[task]) {
      todoList[task].done = true;
    }
  });
  config.set("todos", todoList);
}

export function markAsNotDone(idx) {
  const todoList = config.get("todos") ?? [];
  todoList[idx].done = false;
  config.set("todos", todoList);
}
