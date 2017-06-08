 var computerLetters = ["A", "B", "C", "D", "E", "F", "G",
  "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
   "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var playerGuessTheLetter =[];
var wins = 0;
var losses = 0;
var guessesleft = 9;
var computerGuesses = [];
var playerWin = false;
var playerLoses = false;
var playerPick = "";
var computerPick= "";


//functions
//data
//computer must pick a letter.
 function pickALetter() {
	 computerPick= computerLetters[Math.floor(Math.random() * computerLetters.length)];

}

//player must guess a letter


//(display) guess will be display (the letter) in (your guesses so far)--guess = wrong letters
function displayGuessedLetters() {
	var displayLetters = "<p>Your guess so far: " + playerGuessTheLetter.join(" ") + "</p>"
	document.getElementById("gameGuessSoFar").innerHTML = displayLetters;

}
 
 //display wins, losses, and guesses left

 //function displayScore() {
 	//var scoreOne = "<p>Wins: " + wins + "</p>"; 
 	//var scoreTwo = "<p>losses: " + losses + "</p>"; 
 	//var scoreThree ="<p>guess left: " + guessesleft + "</p>";
// }

function displayScore() {

 document.getElementById("gameWins").innerHTML = "Wins: " + wins;
 document.getElementById("gameLosses").innerHTML = "Losses: " + losses;
 document.getElementById("gameGuessesLeft").innerHTML = "Guesses left: " + guessesleft;
}
//If player guess right (wins), (wins) go up by 1 pt.

function comparePicks() {
	if (playerPick == computerPick) {
		console.log("Yes, you picked right");
		document.getElementById("gameBoard").innerHTML = "Yes, my letter was " + computerPick;
		wins++;
		resetGame();
	}
	else {
		console.log("Sorry, try again");
		document.getElementById("gameBoard").innerHTML = "Sorry, try again";
		guessesleft--;
	}

	if (guessesleft == 0)
	{
		console.log("You lost");
		document.getElementById("gameBoard").innerHTML = "You're out of tries, my letter was " + computerPick + ". Press another letter to restart the game.";
		losses++;
		resetGame();
	}
}


//computer pick a new letter


//display (what I want the player to see)

function updatePage() {
	displayScore();
	displayGuessedLetters();

}
//reset= (your guess so far) and (guess left) will clear
function resetGame() {
	guessesleft = 9;
	computerPick ="";
	playerGuessTheLetter = [];
}




//Events (when and how)

//player must guess a letter

document.onkeyup = function(event) {
	if (computerGuesses == "") {
		pickALetter();
	}

	//records the player's guess/keystroke
	playerPick = event.key;
	playerGuessTheLetter.push(playerPick.toLowerCase());


	//compare the player guesss and the computer guess
	comparePicks();

	// update the page with the score and letters
	updatePage();

	//reset the game
	//resetGame();



}






