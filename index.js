#! /usr/bin/env node
//const Result = await inquirer.prompt([{ message: "Enter First number", type: "number", name: "First number" }]);
//name print karta with values eg operation addition
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter the first number for action",
        type: "number",
        name: "firstnumber", //type should not have space and dont use caps for ease
    },
    {
        message: "Enter the second number for action",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "Which operation you want to perform",
        type: "list",
        name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
//console.log(result); 
if (answer.operation === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operation === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operation === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Pls Give valid operations");
}
