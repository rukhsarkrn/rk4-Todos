#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("WELCOME TO COSMETIC SHOP"));
//inquirer     done
//array        done
//function     done
//operators
let condition = true;
//      array
let todos = [];
//      function
async function makeTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: (chalk.bgCyan("select an operation")),
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit",],
        });
        //        ADD
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: (chalk.yellow("Add item in the list.")),
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        //       UPDATE
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: (chalk.yellow("Update item in the list")),
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: (chalk.yellow("Add item in the list.")),
                name: "todo"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        //       VIEW
        if (ans.select == "View") {
            console.log(chalk.italic("\n*****== TO DO LIST ==*****\n"));
            console.log(todos);
            console.log("\n==================\n");
        }
        //       DELETE
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: (chalk.yellow("Delete item in the list")),
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
        //      EXIT
        if (ans.select == "Exit") {
            condition = false;
            console.log(chalk.bgBlackBright("THANK YOU FOR YOUR VISIT"));
        }
        ;
    } while (condition);
}
makeTodo(todos);
