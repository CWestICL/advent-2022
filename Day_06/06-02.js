const fs = require("fs");

const data = fs.readFileSync("06-01_input.txt", "utf8");
const stream = data.split("\n")[0];

for (let i = 13; i < stream.length; i++) {

    const group = [];

    for (let x = 0; x < 14; x++) {
        group.unshift(stream[i - x]);
    }

    const filtered = [...new Set(group)];

    if (group.length === filtered.length) {
        console.log(i + 1);
        break;
    }
}
