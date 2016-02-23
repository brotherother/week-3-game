var listOfLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
var userGuesses = [];
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    userGuesses.push(userGuess);
    document.querySelector('#userGuesses').innerHTML = "User Guesses: " + userGuesses.join(', ');
    if (userGuess === computerGuess){
        var audio = new Audio('assets/sounds/win.mp3');
        audio.play();
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        userGuesses = [];
        document.querySelector('#userGuesses').innerHTML = "User Guesses: ";
        computerGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
        guessesLeft=9;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
    }else{
        guessesLeft--;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
        if (guessesLeft == 0) {
            var audio = new Audio('assets/sounds/lose.mp3');
            audio.play();
            losses++; 
            document.querySelector('#losses').innerHTML = "Losses: " + losses; 
            document.querySelector('#userGuesses').innerHTML = "User Guesses: ";
            guessesLeft=9;
            document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
            userGuesses = []
            computerGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
        }
    }
}