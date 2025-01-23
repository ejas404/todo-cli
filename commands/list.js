import Conf from "conf";
import chalk from "chalk";

const config = new Conf({ projectName: "todo" });

export function list() {
  const todoList = config.get("todos") ?? [];
  if (!todoList.length) {
    console.log(chalk.red.bold("No todos found"));
  }

  if (todoList && todoList.length) {
    console.log(
      chalk.blue.bold(
        "Tasks in green are done. Tasks in yellow are still not done."
      )
    );
  }

  todoList.forEach((task, index) => {
    if (task.done) {
      console.log(chalk.greenBright(`${index}. ${task.text}`));
    } else {
      console.log(chalk.yellowBright(`${index}. ${task.text}`));
    }
  });
}
