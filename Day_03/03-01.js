const fs = require("fs");

const data = fs.readFileSync("Day_03/03_input.txt", "utf8");
const values = data.split("\n");

const priority = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let score = 0;

for (let val of values) {

    const half1 = val.slice(0, val.length / 2);
    const half2 = val.slice(val.length / 2);

    for (let char of half1) {

        if (half2.includes(char)) {

            for (let i = 0; i < priority.length; i++) {

                if (char === priority[i]) {

                    score += i;
                }
            }

            break;
        }
    }
}

console.log(score);
