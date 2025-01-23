#! /usr/bin/env node

import { program } from "commander";
import { list } from "./commands/list.js";
import { add } from "./commands/add.js";
import { markAsDone, markAsNotDone } from "./commands/done.js";
import { removeTask } from "./commands/remove.js";

program.command("list").description("list all todos").action(list);
program.command("add <todo>").description("add a new todo").action(add);

program
  .command("done")
  .description("mark a todo as done")
  .option("-t, --tasks <tasks...>", "tasks to mark as done")
  .action(markAsDone);

program
  .command("!done <index>")
  .description("mark a todo as not done")
  .action(markAsNotDone);

program
  .command("remove <index>")
  .description("remove a todo")
  .action(removeTask);

program.parse();
