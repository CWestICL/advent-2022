const fs = require("fs");

let data = fs.readFileSync("02-01_input.txt", "utf8");
let values = data.split("\n");

let score = 0;

for (let val of values) {
    let moves = val.split(" ");
    if (moves.length === 2) {

        //Score for shape selected
        if (moves[1] === "X") {
            score += 1;
            moves[1] = "A";
        }
        else if (moves[1] === "Y") {
            score += 2;
            moves[1] = "B";
        }
        else {
            score += 3;
            moves[1] = "C";
        }

        //Score for outcome
        if (moves[0] === moves[1]) {
            score += 3;
        }
        else if ((moves[0] === "A" && moves[1] === "B") || (moves[0] === "B" && moves[1] === "C") || (moves[0] === "C" && moves[1] === "A")) {
            score += 6;
        }
    }
}

console.log(score);
