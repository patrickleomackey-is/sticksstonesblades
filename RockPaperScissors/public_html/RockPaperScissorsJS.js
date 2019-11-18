function generateComputerChoice() {
    var computer = Math.trunc(Math.random() * 3 + 1);
    if (computer === 1) {
        return "Rock";
    }
    else {
        if (computer === 2) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }
}

function PlayTheGame() {
    var playerChoice, computerChoice;

    var radioButtons = document.getElementsByName("choice");
    var index = 0;
    while (index < radioButtons.length) {
        if (radioButtons[index].checked === true ) {
            playerChoice = radioButtons[index].value;
        }
        ++index;
    }

    // To Do: fill in the logic for playing the game
}

