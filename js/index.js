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