let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
//console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const computerDifference = Math.abs(computerGuess - targetNumber);
    const humanDiffreence = Math.abs(humanGuess - targetNumber);
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Your number is out of range.')
    } // above "if" is for assignment 6 
    
    if (humanDiffreence <= computerDifference) {
        return true;
    } else {
        return false;
    }
};
//console.log(compareGuesses(4, 7, 3))

const updateScore = winner => {
    if (winner === 'human') {
        humanScore = humanScore + 1;
    } else {
        computerScore = computerScore + 1;
    }
};

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1
}

// Ekstra opg nr. 6 
