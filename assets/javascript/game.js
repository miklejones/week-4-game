var randomGoal = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;

var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;

function crystalValues() {
    redCrystal = Math.floor(Math.random() * 12) + 1;
    do {
        blueCrystal = Math.floor(Math.random() * 12) + 1;
    } while (blueCrystal === redCrystal);
    do {
        yellowCrystal = Math.floor(Math.random() * 12) + 1;
    } while (yellowCrystal === redCrystal || yellowCrystal === blueCrystal);
    do {
        greenCrystal = Math.floor(Math.random() * 12) + 1;
    } while (greenCrystal === redCrystal || greenCrystal === blueCrystal || greenCrystal === yellowCrystal);;
}

function startRound() {
    randomGoal = Math.floor(Math.random() * 101) + 19;
    document.getElementById("target-score").innerHTML = randomGoal;
    totalScore = 0;
    document.getElementById("total-score").innerHTML = totalScore;
    crystalValues();
}

function startGame() {
    startRound();
    wins = 0;
    losses = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
}

function checkScore() {
    if (totalScore > randomGoal) {
        losses ++;
        document.getElementById("losses").innerHTML = losses;
        startRound();
    } else if (totalScore === randomGoal) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        startRound();
    };
}


startGame();

$("#red-gem").click(function () {
    totalScore += redCrystal;
    document.getElementById("total-score").innerHTML = totalScore;
    checkScore();
});

$("#blue-gem").click(function () {
    totalScore += blueCrystal;
    document.getElementById("total-score").innerHTML = totalScore;
    checkScore();
});

$("#yellow-gem").click(function () {
    totalScore += yellowCrystal;
    document.getElementById("total-score").innerHTML = totalScore;
    checkScore();
});

$("#green-gem").click(function () {
    totalScore += greenCrystal;
    document.getElementById("total-score").innerHTML = totalScore;
    checkScore();
});



