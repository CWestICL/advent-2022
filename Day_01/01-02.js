const fs = require("fs");

const data = fs.readFileSync("Day_01/01_input.txt", "utf8");
const values = data.split("\n");

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

const sortedElfArray = elfArray.sort(function (a, b) { return b - a });

console.log(sortedElfArray[0] + sortedElfArray[1] + sortedElfArray[2]);
