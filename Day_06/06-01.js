const fs = require("fs");

const data = fs.readFileSync("Day_06/06_input.txt", "utf8");
const stream = data.split("\n")[0];

for (let i = 3; i < stream.length; i++) {

    const group = [stream[i - 3], stream[i - 2], stream[i - 1], stream[i]];
    const filtered = [...new Set(group)];

    if (group.length === filtered.length) {

        console.log(i + 1);
        break;
    }
}