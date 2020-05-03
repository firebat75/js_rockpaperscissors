function computerPlay() {
    let x =  Math.floor(Math.random() * 3);
    if (x == 0) {
        return "ROCK"
        } else if (x == 1) {
            return "PAPER"
        } else {return "SCISSORS"}
}

function playRound(playerSelection, computerSelection) {
    let a = playerSelection.toUpperCase();
    
    if (a == "ROCK") {
        if (computerSelection == "ROCK") {
            return "You:ROCK - CPU:ROCK = DRAW!"
        } else if (computerSelection == "PAPER") {
            return "You:ROCK - CPU:PAPER = LOSS!"
        } else {
            return "You:ROCK - CPU: SCISSORS = WIN!"
        }
    } else if (a == "PAPER") {
        if (computerSelection == "ROCK") {
            return "You:PAPER - CPU:ROCK = WIN!"
        } else if (computerSelection == "PAPER") {
            return "You:PAPER - CPU:PAPER = DRAW!"
        } else {
            return "You:PAPER - CPU:SCISSORS = LOSS!"
        }
    } else {
        if (computerSelection == "ROCK") {
            return "You:SCISSORS - CPU:ROCK = LOSS!"
        } else if (computerSelection == "PAPER") {
            return "You:SCISSORS - CPU:PAPER = WIN!"
        } else {
            return "You:SCISSORS - CPU:SCISSORS = DRAW!"
    }
}
}


const container = document.querySelector('#container');

const buttons = document.querySelectorAll('button');

var score = [0, 0];

var gamefinish = false;

buttons.forEach((button => {
    button.addEventListener('click', (e) => {

        if (gamefinish == true) {
            x = container.childNodes.length
            for (var i = 0; i < x; i++) {
                container.removeChild(container.childNodes[0]);
            }
            gamefinish = false;
        }

        const result = document.createElement("pre");
        var text = playRound(button.id, computerPlay());

        if (text.slice(-2, -1) == "N") {score[0]++
        } else if (text.slice(-2, -1) == "S") {score[1]++};
        
        text += `\nYOU:[${score[0]}] - CPU:[${score[1]}]`;

        if (score[0] == 5) {
            text += "\n\n----------\n|YOU WIN!|\n----------";
            score = [0, 0];
            result.style.color = "green";
            gamefinish = true;
        } else if (score[1] == 5) {
            text += "\n\n-----------\n|You Lose!|\n-----------";
            score = [0, 0];
            result.style.color = "red";
            gamefinish = true;
        }   

        result.textContent = text;

        container.appendChild(result);
    });
}));

