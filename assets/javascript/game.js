

var guess = "abcdefghijklmnopqurstuvwxyz";

var guesses = 9;
var wins = 0;
var losses = 0;
var keyGuessed = [];

// Generate Random letter 
function randomLetter() {
return guess.substr( Math.floor(Math.random() * 27), 1);
}

var compGuess = randomLetter();
console.log("computer guessed letter: " + compGuess);


document.onkeyup = function(event) {
var userGuess = event.key;
console.log("user guessed letter: " + userGuess);

//Make the user guess in lower case
userGuess.toLocaleLowerCase();

// check user hasnt made same guess again;

if (userGuess === compGuess){
    wins++;
    keyGuessed = [];
    guesses = 9;
    compGuess = randomLetter();

}else if (userGuess != compGuess && guesses != 1){
    guesses--;

}else{
    losses++;
    keyGuessed = [];
    guesses = 9;
    compGuess = randomLetter();
}
keyGuessed.push(userGuess);

document.getElementById("div2").innerHTML = "Wins: " + wins;
document.getElementById("div3").innerHTML = "losses: " + losses;
document.getElementById("div4").innerHTML = "Guesses left: " + guesses;
document.getElementById("div5").innerHTML = "Your guesses so far : " + keyGuessed;


}