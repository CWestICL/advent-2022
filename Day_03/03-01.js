const fs = require("fs");

let data = fs.readFileSync("03-01_input.txt", "utf8");
let values = data.split("\n");

const priority = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let score = 0;

for (let val of values) {

    let half1 = val.slice(0, val.length / 2);
    let half2 = val.slice(val.length / 2);

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
