const fs = require("fs");

const data = fs.readFileSync("Day_02/02_input.txt", "utf8");
const values = data.split("\n");

let score = 0;

for (let val of values) {

    const moves = val.split(" ");

    if (moves.length === 2) {

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

        if (moves[0] === moves[1]) {

            score += 3;
        }
        else if ((moves[0] === "A" && moves[1] === "B") || (moves[0] === "B" && moves[1] === "C") || (moves[0] === "C" && moves[1] === "A")) {

            score += 6;
        }
    }
}

console.log(score);
