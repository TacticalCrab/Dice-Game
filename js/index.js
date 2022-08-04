function shufflePhotos(dice, delay) {
    var number = Math.round(Math.random() * 5) + 1
    dice.src = `images/dice-${number}.png`;

    if (dice.id == "player1-dice") {
        window.player1Score = number;
    } else if (dice.id == "player2-dice"){
        window.player2Score = number;
    }
    
    setTimeout(() => {
        if (dice.getAttribute("shuffle") == "true") {
            shufflePhotos(dice, delay);
        }
    }, delay);
}


function whoWins() {
    console.log(window.player1Score, window.player2Score);
    if (window.player1Score > window.player2Score) {
        document.querySelector("#player-1-text").style.color = "green";
        document.querySelector("#player-2-text").style.color = "red";
    } else if (window.player2Score > window.player1Score) {
        document.querySelector("#player-1-text").style.color = "red";
        document.querySelector("#player-2-text").style.color = "green";
    } else {
        document.querySelector("#player-1-text").style.color = "gray";
        document.querySelector("#player-2-text").style.color = "gray";
    }
}

function shuffleDices() {

    // Begin action
    document.querySelector("#player-1-text").style.color = "white";
    document.querySelector("#player-2-text").style.color = "white";

    dices.forEach((dice) => {
        dice.classList.toggle("shake-animation");
        dice.setAttribute("shuffle", true);
        shufflePhotos(dice, 100);
    // ----
    });

    setTimeout(() => {
        // Finish action
        dices.forEach((dice) => {
            dice.shuffle = false;
            dice.classList.toggle("shake-animation"); 
            dice.setAttribute("shuffle", false);
        });

        whoWins();
    // ----
    }, 2000)
}

const dices = document.querySelectorAll(".dice");

window.player1Score = 0;
window.player2Score = 0;