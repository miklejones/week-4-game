var randomGoal = 0;
var wins = 0;
var losses = 0;
var yourScore = 0;

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

function startGame() {
    randomGoal = Math.floor(Math.random() * 101) + 19;
    document.getElementById("target-score").innerHTML = randomGoal;

    crystalValues();
}


