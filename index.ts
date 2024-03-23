#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {
        name:"useGuessesNumber",
        type:"number",
        message:"Please a guessing number select 6 to 1",
    },
]);
if (answer.useGuessesNumber === randomNumber) {
console.log("congtratulation!!! you are guess right number");

} else {
    console.log("you are guess wrong number");
    
}
