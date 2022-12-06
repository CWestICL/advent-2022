const fs = require("fs");

let data = fs.readFileSync("05-01_input.txt", "utf8");
let lines = data.split("\n");

let boxStart;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith(" 1 ")) {
        boxStart = i;
        break;
    }
}

const boxNum = Number(lines[boxStart].replaceAll(" ", "").slice(-1));

const boxes = [];

for (let i = 0; i < boxStart; i++) {
    boxes.push(lines[i]);
}

const stacks = [];

for (let i = 0; i < boxNum; i++) {
    stacks.push([]);
}

for (let row of boxes) {
    for (let i = 0; i < boxNum; i++) {
        const char = row[1 + (i * 4)]
        if (char !== " ") {
            stacks[i].push(char)
        }
    }
}

for (let i = boxStart + 2; i < lines.length; i++) {

    if (lines[i]) {

        moves = lines[i].split(" ");

        for (let x = 0; x < moves[1]; x++) {
            stacks[moves[5] - 1].unshift(stacks[moves[3] - 1].shift());
        }
    }
}

answer = "";

for (let stack of stacks) {
    answer += stack[0]
}

console.log(answer);

