//this file will hold the word constructor, it will break down the word into individual letters

//require the random word generated by the computer
var computerChoice = require("./bank.js");
//checking
console.log("TEST computerChoice is: " + computerChoice);

// Word constructor
var Word = function() {


};

module.exports = Word;


//create a variable that will hold the random word chosen by the computer

// //the word that is chosen for the round
// var Word = function() {
// 	//the array that will hold the chosen word
// 	this.chosenWord = [];

// 	this.chooseTheWord = function() {
// //for loop with comp word to push underscrore in the array
// 	}


// };

//splitting the word into letter, stored in an array
// var individualLetterArray = computerChoice.split("");
// console.log(individualLetterArray);

// function dashedComputerChoice() {
// 	for (var i = 0; i < individualLetterArray.length; i++) {
// 		console.log("_")
// 	}
// }
// dashedComputerChoice();

//exporting the object, so it can be used in other files
// module.exports = word;


