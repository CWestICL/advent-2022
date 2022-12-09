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

console.log(Math.max(...elfArray));
