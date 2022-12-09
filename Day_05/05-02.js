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



        console.log("##########");
        console.log("1 - ", stacks[0].join(" "));
        console.log("2 - ", stacks[1].join(" "));
        console.log("3 - ", stacks[2].join(" "));
        console.log("4 - ", stacks[3].join(" "));
        console.log("5 - ", stacks[4].join(" "));
        console.log("6 - ", stacks[5].join(" "));
        console.log("7 - ", stacks[6].join(" "));
        console.log("8 - ", stacks[7].join(" "));
        console.log("9 - ", stacks[8].join(" "));
        console.log(lines[i]);

        const temp = [];

        for (let x = 0; x < moves[1]; x++) {
            temp.unshift(stacks[moves[3] - 1].shift());
        }

        console.log("Temp:", temp);

        const tempNum = temp.length;

        for (let x = 0; x < tempNum; x++) {
            stacks[moves[5] - 1].unshift(temp.shift());
        }
    }
}

answer = "";

for (let stack of stacks) {
    answer += stack[0]
}

console.log(answer);

