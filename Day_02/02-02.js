const fs = require("fs");

const data = fs.readFileSync("Day_02/02_input.txt", "utf8");
const values = data.split("\n");

let score = 0;

for (let val of values) {

    const moves = val.split(" ");

    if (moves.length === 2) {

        if (moves[1] === "Y") {

            score += 3;
            moves[1] = moves[0];
        }
        else if (moves[1] === "Z") {

            score += 6;

            if (moves[0] === "A") {

                moves[1] = "B";
            }
            else if (moves[0] === "B") {

                moves[1] = "C";
            }
            else {

                moves[1] = "A";
            }
        }
        else {

            if (moves[0] === "A") {

                moves[1] = "C";
            }
            else if (moves[0] === "B") {

                moves[1] = "A";
            }
            else {

                moves[1] = "B";
            }
        }

        if (moves[1] === "A") {

            score += 1;
        }
        else if (moves[1] === "B") {

            score += 2;
        }
        else {

            score += 3;
        }
    }
}

console.log(score);
