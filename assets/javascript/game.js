var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerChoice;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];



document.onkeyup = function (event) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var random = letters[Math.floor(Math.random() * 26)];
    computerChoice = random;
    console.log(computerChoice)

    var userGuess = event.key;
    console.log("User pressed " + userGuess)

    if (userGuess === computerChoice) {
        wins++
        document.getElementById("wins").textContent = "wins: " + wins;
        alert("Congrats You Won");


        newGame();



    }

    if (userGuess !== computerChoice) {
        guessesLeft--
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;

        guessesSoFar.push(userGuess);
        document.getElementById("guessesSoFar").textContent = "Your Guesses So Far: " + guessesSoFar;


    
    if (guessesLeft <= 0) {
        alert("Sorry You Lost");
        losses++
        document.getElementById("losses").textContent = "losses: " + losses;

        newGame();

    }


}

function newGame() {
    guessesLeft = 9;
    guessesSoFar = [];
    document.getElementById("guessesLeft").textContent = "Guesses Left:" + 9;
    document.getElementById("guessesSoFar").textContent = "Guesses So Far:" + [];

}