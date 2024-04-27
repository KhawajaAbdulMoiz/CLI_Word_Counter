#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.bold.italic `-------WORD COUNTER-------`);
const answers = await inquirer.prompt([
    { name: "Sentence",
        type: "input",
        message: chalk.white `Enter a sentence to count its words : ` }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.magenta(`Your sentence includes ${words.length} words `));
