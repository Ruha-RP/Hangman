//this file holds all the words to be used (word bank)

//creating the wordBank array that holds the list of words
var wordBank = ["mercury", "venus", "earth", "mars", "jupiter"];

//creating a variable that will choose a random word from the word bank
var computerChoice = wordBank[Math.floor((Math.random() * wordBank.length))];

//checking if randomization works
// console.log(computerChoice);

//exporting the object so it can be utillized by other files
module.exports = computerChoice;