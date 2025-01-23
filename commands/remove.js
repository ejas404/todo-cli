import Conf from "conf";
const config = new Conf({ projectName: "todo" });

export function removeTask(idx) {
  const todoList = config.get("todos") ?? [];
  todoList.splice(idx, 1);
  config.set("todos", todoList);
}
