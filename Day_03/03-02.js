const fs = require("fs");

const data = fs.readFileSync("Day_03/03_input.txt", "utf8");
const values = data.split("\n");

const priority = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const groups = [];

while (values.length > 0) {
    const group = [];
    for (let i = 0; i < 3; i++) {
        group.push(values.shift());
    }
    groups.push(group);
}

let score = 0;

for (let group of groups) {

    for (let char of group[0]) {

        if (group[1].includes(char) && group[2].includes(char)) {

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


