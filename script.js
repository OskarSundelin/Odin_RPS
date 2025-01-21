console.log("Hello World!");

let humanScore
let computerScore

function playGame() {
	humanScore=0;
	computerScore=0;
	for (let index = 0; index < 5; index++) {


		//Associate random number with rock, paper or scissor
		let computerSelection = getComputerChoice();
		function getComputerChoice() {
			let input;

			//Generate random number between 0-2
			function getRandomInt() {
				return Math.floor(Math.random() * 3);
			}
			//Translate random number into computer choice
			switch (getRandomInt()) {
				case 0:
					input = 'rock';
					break;
				case 1:
					input = 'paper';
					break;
				case 2:
					input = 'scissors';
			}
			return input;
		}

		//Prompt user for input, must be case-insensitive string 
		//(eg, 'rock', 'Paper', 'SCISSORS')
		let humanSelection = getHumanChoice();
		function getHumanChoice() {
			let input = prompt("Choose rock, paper, or scissors:", "rock").toLowerCase();
			return input;
		}

		playRound(humanSelection, computerSelection);
	}
}
playGame();

function playRound(humanSelection, computerSelection) {
	//Print choices
	let human = humanSelection;
	console.log("Human chose " + human + "!");
	let computer = computerSelection;
	console.log("Computer chose " + computer + "!");

	//Compare the values of computer's choice and player's choice
	if ((human === 'rock' && computer === 'scissors') || (human === 'paper' && computer === 'rock') || (human === 'scissors' && computer === 'paper')) {
		console.log("Human wins!");
		humanScore++;
	}
	else if ((human === 'scissors' && computer === 'rock') || (human === 'rock' && computer === 'paper') || (human === 'paper' && computer === 'scissors')) {
		console.log("Computer wins!");
		computerScore++;
	}
	else if (human === computer) {
		console.log("Draw!");
	}
	else {
		console.log("Invalid!");
	}
	console.log("Scores are: Computer: " + computerScore + " Human: " + humanScore);
}

// playRound(humanSelection, computerSelection);