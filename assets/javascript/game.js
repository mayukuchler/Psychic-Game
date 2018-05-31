var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 8;
var guessesLeft = 8;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var guessUpdate = function () {
    $('#guessLeft').text("Guesses left: " + guessesLeft);
};

var updateLetterToGuess = function () {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function () {
    $('#let').text("Your Guesses so far: " + guessedLetters.join(', '));
};

var reset = function () {
    totalGuesses = 8;
    guessesLeft = 8;
    guessedLetters = [];
    updateLetterToGuess();
    guessUpdate();
    updateGuessesSoFar();
}

updateLetterToGuess();
guessUpdate();

document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.which).toLowerCase();

    guessedLetters.push(userGuess);
    guessUpdate();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            $('#wins').text("Wins: " + wins);
            alert("You correctly guessed " + letterToGuess + ". You must be cheating!");
            reset();
        }
    } else if (guessesLeft == 0) {

        losses++;
        $('#losses').text("Losses: " + losses);
        alert("You ran out of lives. The correct letter was " + letterToGuess + ". You lose :)");

        reset();
    }
};
