const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let computerScore = 0;
let humanScore = 0;


window.addEventListener('beforeunload', (event) => {
    if ((computerScore || humanScore) != 0)
    {
    event.preventDefault();
    event.returnValue = "";
    }
});

console.log('Welcome to the Console! Looks like you have made it. If you are reading this on mobile then I congratulate you. In order to start the game just type playGame(value) into the console and replace "value" with these valid values:\n\n- Natural numbers for finite rounds.\n- Zero or "Infinity" for infinite rounds.');

function getComputerChoice()
{
    function getRandomInt(max)
    {
        return Math.floor(Math.random() * max);
    }

switch (getRandomInt(3))
{
    case 0: {
        return ROCK;
    } case 1: {
        return PAPER;
    } case 2: {
        return SCISSORS;
    }
}
}

function getHumanChoice()
{
    const choice = prompt("Rock, Paper or Scissors?");

    if (choice?.trim().toLowerCase() === "rock")
    {
        return ROCK;
    }
    else if (choice?.trim().toLowerCase() === "paper")
    {
        return PAPER;
    }
    else if (choice?.trim().toLowerCase() === "scissors")
    {
        return SCISSORS;
    }
    else if (choice === null)
    {
        if (confirm("Do you want to end the game?\nThe scores will be reset to zero."))
        {
            return null;
        }
        else
        {
            getHumanChoice();
        }
    }
    else
    {
        alert("Play a real move!");
        getHumanChoice();
        return;
    }
}

function playRound()
{
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    humanChoice;
    computerChoice;

    if ((humanChoice === ROCK) && (computerChoice === ROCK))
    {
        alert("The Computer picked Rock.\nIt's a Tie! Rock and Rock.");
        return;
    }
    else if ((humanChoice === ROCK) && (computerChoice === PAPER))
    {
        alert("The Computer picked Paper.\nYou Lose! Paper beats Rock.");
        return ++computerScore;
    }
    else if ((humanChoice === ROCK) && (computerChoice === SCISSORS))
    {
        alert("The Computer picked Scissors.\nYou Win! Rock beats Scissors.");
        return ++humanScore;
    }
    else if ((humanChoice === PAPER) && (computerChoice === PAPER))
    {
        alert("The Computer picked Paper.\nIt's a Tie! Paper and Paper.");
        return;
    }
    else if ((humanChoice === PAPER) && (computerChoice === SCISSORS))
    {
        alert("The Computer picked Scissors.\nYou Lose! Scissors cut Paper.");
        return ++computerScore;
    }
    else if ((humanChoice === PAPER) && (computerChoice === ROCK))
    {
        alert("The Computer picked Rock.\nYou Win! Paper beats Rock.");
        return ++humanScore;
    }
    else if ((humanChoice === SCISSORS) && (computerChoice === SCISSORS))
    {
        alert("The Computer picked Scissors.\nIt's a Tie! Scissors and Scissors.");
        return;
    }
    else if ((humanChoice === SCISSORS) && (computerChoice === ROCK))
    {
        alert("The Computer picked Rock.\nYou Lose! Rock beats Scissors.");
        return ++computerScore;
    }
    else if ((humanChoice === SCISSORS) && (computerChoice === PAPER))
    {
        alert("The Computer picked Paper.\nYou Win! Scissors cut Paper.");
        return ++humanScore;
    }
    else if ((humanChoice === null))
    {
        return null;
    }
}

function showScore()
{
    return `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;
}

function playGame(scoreMax)
{   
    let roundNum = 1;
    
    if (scoreMax >= 1)
    {
        alert(`Game Start!\nYou vs. Computer!\nBest of ${scoreMax}!\n\nCancel to end the game.`)
        while ((computerScore || humanScore) <= scoreMax)
        {
            alert(`Round ${roundNum}!`);
            let roundResult = playRound();
                if (roundResult === null)
                {
                    alert(`Game Over!\nYou cancelled the game.\nScores reset to zero.`);
                    computerScore = 0;
                    humanScore = 0;
                    break;
                }
            alert(showScore());
            ++roundNum;
            if ((computerScore === scoreMax) || (humanScore === scoreMax))
            {
                if (computerScore > humanScore)
                {
                    alert(`Game Over!\n\n${showScore()}\n\nThe Computer wins!\n\nScores have been reset to zero.`);
                    console.log(`Game Over!\n\n${showScore()}\n\nThe Computer wins!\n\nScores have been reset to zero.`);
                    computerScore = 0;
                    humanScore = 0;
                    break;
                }
                else if (computerScore < humanScore)
                {
                    alert(`Game Over!\n\n${showScore()}\n\nYou win!\n\nScores have been reset to zero.`);
                    console.log(`Game Over!\n\n${showScore()}\n\nYou win!\n\nScores have been reset to zero.`);
                    computerScore = 0;
                    humanScore = 0;
                    break;
                }
            }
        }
    }
    else if (scoreMax === 0)
    {
        alert(`Game Start!\nYou vs. Computer!\nInfinite Rounds!\n\nCancel to end the game.`);
        while ((computerScore || humanScore) <= scoreMax)
        {
            alert(`Round ${roundNum}!`);
            let roundResult = playRound();
                if (roundResult === null)
                {
                    alert(`Game Over!\nYou cancelled the game.\nScores reset to zero.`);
                    computerScore = 0;
                    humanScore = 0;
                    break;
                }
            alert(showScore());
            ++roundNum;
        }
    }
    else
    {
        alert('Invalid Argument!\n\nOnly one argument must be accepted.\nAcceptable values include:\n\n- Natural numbers for finite rounds.\n- Zero or "Infinity" for infinite rounds.');
        console.error('Invalid Argument!\n\nOnly one argument must be accepted.\nAcceptable values include:\n\n- Natural numbers for finite rounds.\n- Zero or "Infinity" for infinite rounds.');
    }
}