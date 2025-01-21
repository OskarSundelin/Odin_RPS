console.log("Hello World!");



//Associate random number with rock, paper or scissor
const computerSelection = getComputerChoice();
function getComputerChoice(){
	let input;

	//Generate random number between 0-2
	function getRandomInt() {
		return Math.floor(Math.random() * 3);
	}
	//Translate random number into computer choice
	switch(getRandomInt()){
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
const humanSelection = getHumanChoice();
function getHumanChoice(){
	let input = prompt("Choose rock, paper, or scissors:", "rock").toLowerCase();
	return input;
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanSelection, computerSelection) {
	//Print choices
	let human = humanSelection;
	console.log("Human chose " + human +"!");
	let computer = computerSelection;
	console.log("Computer chose " + computer +"!");

	//Compare the values of computer's choice and player's choice
	if(human == 'rock', computer == 'scissors' || human == 'paper', computer == 'rock' || human == 'scissors', computer == 'paper'){
		console.log("Human wins!");
		humanScore++;
	}
	else if (human == 'scissors', computer == 'rock' || human == 'rock', computer == 'paper' || human == 'paper', computer == 'scissors'){
		console.log("Computer wins!");
		computerScore++;
	}
	else if (human == computer){
		console.log("Draw!");
	}
	else {
		console.log("Invalid!");
	}
	console.log("Scores are: Computer: " + computerScore + " Human: " + humanScore);
}

playRound(humanSelection, computerSelection);