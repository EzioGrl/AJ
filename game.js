
// program data:
var number = Math.floor(Math.random()*100);
var guess;
var limit = 5;
var won = false;
var guesses = [];

for (var i = 1; i <= limit; i++) {
    // prompt user for their guess
    do{
        guess = parseInt(prompt("Guess a number"));
    } while (isNaN(guess) || isPreviousGuess(guess));
   
    // if coorect: let the user know they won
    if (guess == number) {
        document.write("Correct! You won.");
        won = true;
        break;
    }

    // if incorrect: let the user know
    else {
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed : " + guesses.toString() + "\nTries remaining : " + (limit - i));
    }
    isPreviousGuess;
}
//if user ran out of tries
/*if (!won) {
    document.write("Sorry, you ran out of tries. Game over.");
}*/
if (!won) {
    document.write("Sorry, you ran out of tries. Game over. <br> The correct number was: " + number);

}

function isPreviousGuess() {
    for (i = 0; i < guesses.length; i++) {
        if (guesses[i] == guess) {
            return true;
        }
    }
    return false;
}
