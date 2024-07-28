const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } if (userInput == 'bomb') {
        console.log(`The user won!`);
    } else {
        console.log(`Enter a valid choice`);
    }
};

//To test if the function works
//console.log(getUserChoice('rock'));

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

//To test if the function works
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice) {
        return 'Tie!';
    } else if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
            return 'The user won!';
        } else if (computerChoice == 'scissors') {
            return 'The computer won!';
        }
    } else if (userChoice == 'paper') {
        if (computerChoice == 'rock') {
            return 'The user won!';
        } else if (computerChoice == 'scissors') {
            return 'The computer won!';
        }
    } else if (userChoice == 'scissors') {
        if (computerChoice == 'paper') {
            return 'The user won!';
        } else if (computerChoice == 'rock') {
            return 'The computer won!';
        }
    }
};

//To test the function
//console.log(determineWinner('paper', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('rock'); //You can change the input here to test different choices
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    console.log(`You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`);
};

playGame();