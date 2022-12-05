const fs = require("fs");

let data = fs.readFileSync("01-01_input.txt", "utf8");
let values = data.split("\n");

const elfArray = [];
let cal = 0;

for (let val of values) {
    if (val) {
        cal += Number(val);
    }
    else {
        elfArray.push(cal);
        cal = 0;
    }
}

let sortedElfArray = elfArray.sort(function (a, b) { return b - a });

console.log(sortedElfArray[0] + sortedElfArray[1] + sortedElfArray[2]);
