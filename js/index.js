const contentContainer = document.querySelector(".content-container");


let humanScore = 0;
let computerScore = 0;
const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-container");

    const humanScoreContainer = document.createElement("div");
    humanScoreContainer.classList.add("human-score");

        const humanScoreText = document.createElement("p");
        humanScoreText.classList.add("score-text");
        humanScoreText.textContent = "You";

        const humanScoreNum = document.createElement("p");
        humanScoreNum.classList.add("score-num");
        humanScoreNum.textContent = humanScore;

    humanScoreContainer.appendChild(humanScoreText);
    humanScoreContainer.appendChild(humanScoreNum);

    const computerScoreContainer = document.createElement("div");
    computerScoreContainer.classList.add("computer-score");
        const computerScoreText = document.createElement("p");
        computerScoreText.classList.add("score-text");
        computerScoreText.textContent = "Computer";

        const computerScoreNum = document.createElement("p");
        computerScoreNum.classList.add("score-num");
        computerScoreNum.textContent = computerScore;

    computerScoreContainer.appendChild(computerScoreText);
    computerScoreContainer.appendChild(computerScoreNum);

    const versusText = document.createElement("p");
    versusText.classList.add("versus-text");
    versusText.textContent = "VS";

scoreContainer.appendChild(humanScoreContainer);
scoreContainer.appendChild(versusText);
scoreContainer.appendChild(computerScoreContainer);
