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

function game() {
    let p = 0;
    let c = 0;
    for (i = 0; i < 5; i++) {
        let choice = prompt("Choose: Rock, Paper, or Sissors")
        let result = (playRound(choice, computerPlay()))
        if (result.slice(0, 7) == "YOU WIN") {
            p = p + 1
        } else if (result.slice(0, 8) == "YOU LOSE") {
            c = c + 1
        }
        console.log(result + ". The score is [Player: " + p + "]-[Computer: " + c + "]");
    }
    if (p > c) {
        console.log("You Win!");
    } else if (c > p) {
        console.log("You Lose!")
    } else {
        console.log("Tie!")
    }
}

const container = document.querySelector('#container');

const buttons = document.querySelectorAll('button');

var score = [0, 0];

var gamefinish = false;

buttons.forEach((button => {
    button.addEventListener('click', (e) => {

        if (gamefinish == true) {
            console.log(container.childNodes)
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
        console.log(container.childNodes)
    });
}));

