

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

//assign key pressed as userGuess
document.onkeyup = function(event) {
var userGuess = event.key;
console.log("user guessed letter: " + userGuess);

//Make the user guess in lower case
userGuess = userGuess.toLowerCase();



// check user hasnt made same guess again and letter not repeated
if(guess.indexOf(userGuess) === -1  || keyGuessed.indexOf(userGuess) != -1){
    alert("Please choose a Letter and/or Dont repeat same letter");
}
    else{
if (userGuess === compGuess){
    wins++;
    keyGuessed = [];
    guesses = 9;
    compGuess = randomLetter();

}else if (userGuess != compGuess && guesses != 1){
    guesses--;
    keyGuessed.push(userGuess);

}else{
    losses++;
    keyGuessed = [];
    guesses = 9;
    compGuess = randomLetter();
}}


document.getElementById("div2").innerHTML = "Wins: " + wins;
document.getElementById("div3").innerHTML = "Losses: " + losses;
document.getElementById("div4").innerHTML = "Guesses left: " + guesses;
document.getElementById("div5").innerHTML = "Your guesses so far : " + keyGuessed;


}