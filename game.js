//this is the main file from which the game  is run

//requiring the inquirer and chalk packages
var inquirer = require('inquirer');
var chalk = require('chalk');

function playGame() {

	//prompting the user to select a letter
	inquirer.prompt([
	{
	type: "input",
	name: "guess",
	message: " Guess a letter!"
	},
	]).then(answers => {

	//checking if inquirer and chalk packages function
	// console.log(chalk.cyan(answers.guess + "\n"));
		if (answers.guess === "p") {
			console.log(chalk.green("\n---------\n" + "CORRECT!\n" + "---------"));
		}
		else {
			console.log(chalk.red("\n---------\n" + "INCORRECT!\n" + "---------"));
			console.log("Try again!\n");

			//runs the function again, so user can choose another letter
			playGame();
		}

	});
}

//this will run the moment the user nodes the file (starts the game)
playGame();
 


