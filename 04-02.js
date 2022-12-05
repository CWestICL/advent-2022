const fs = require("fs");

let data = fs.readFileSync("04-01_input.txt", "utf8");
let values = data.split("\n");

let sum = 0;

for (let val of values) {

    if (val) {

        const pair = val.split(",");

        const compare = [];

        for (let elf of pair) {

            const range = elf.split("-");
            sections = [];

            for (let i = Number(range[0]); i < Number(range[1]) + 1; i++) {
                sections.push(i);
            }

            compare.push(sections);
        }

        compare.sort(function (a, b) { return a.length - b.length; });

        for (let section of compare[0]) {
            if (compare[1].includes(section)) {
                sum++;
                break;
            }
        }

    }

}

console.log(sum);
