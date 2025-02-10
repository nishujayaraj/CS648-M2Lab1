function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);


    if (playerChoice === computerChoice) {
        console.log("It's a tie! Let's play again.");
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win!");
        return "player";
    } else {
        console.log("Computer wins!");
        return "computer";
    }
}

function playGame() {
    let result;
    do {
        const playerChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
        result = playRound(playerChoice);
    } while (result === "tie");

    console.log("Game Over!");
}

playGame();