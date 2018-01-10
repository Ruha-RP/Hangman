//this is the main file from which the game  is run

//requiring the inquirer and chalk packages
var inquirer = require('inquirer');
var chalk = require('chalk');
 
//prompting the user to select a letter
inquirer.prompt([
	{
	name: "guess",
	message: " Guess a letter!"
	},
	]).then(answers => {

	//checking if inquirer and chalk packages function
    // console.log(chalk.cyan(answers.guess + "\n"));

});

