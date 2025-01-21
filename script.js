console.log("Hello World!");

function playRound(humanSelection, computerSelection) {
	
}

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
console.log(computerSelection);
console.log(humanSelection);
//Compare the values of computer's choice and player's choice

//Add score to winner