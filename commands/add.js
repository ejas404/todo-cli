import Conf from "conf";
const config = new Conf({ projectName: "todo" });

export function add(task) {
  const todoList = config.get("todos") ?? [];
  todoList.push({ text: task, done: false });
  config.set("todos", todoList);
}
