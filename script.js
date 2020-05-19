let wordBank = ['apple', 'banana', 'grape', 'dragonfruit', 'kiwi', 'orange', 'pear'];
let randomItem = wordBank[Math.floor(Math.random()*wordBank.length)];
let gameArray = [];
let guessArray = [];
let re = new RegExp(`\\b${guessArray}\\b`, 'gi');

function gameField(){
var letterGuess = prompt("Guess a letter!");
  if (letterGuess != null) {
    guessArray.push(letterGuess);
    console.log(guessArray);
    checkLetter;
  }
}

function checkLetter() {
  console.log(re.test(gameArray));
}
function test1() {
  randomItem;
  gameArray.push(randomItem);
  var elimBtn = document.getElementById('startBtn')
  elimBtn.remove();
  console.log(gameArray);
  gameField();
};



//Pick a random word and save it to a new object x
//Ask the user for input of one letter x
//Check letter against the random word
//If yes, print the letter and the spaces
//If no, lose a guess
//Repeat until word is guessed or run out of guesses.
