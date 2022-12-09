const fs = require("fs");

const data = fs.readFileSync("Day_04/04_input.txt", "utf8");
const values = data.split("\n");

let sum = 0;

for (let val of values) {

    if (val) {

        const pair = val.split(",");

        const compare = [];

        for (let elf of pair) {

            const range = elf.split("-");
            const sections = [];

            for (let i = Number(range[0]); i < Number(range[1]) + 1; i++) {

                sections.push(i);
            }

            compare.push(sections);
        }

        compare.sort(function (a, b) { return a.length - b.length; });

        let check = 0;

        for (let section of compare[0]) {

            if (!compare[1].includes(section)) {
                check++;
            }
        }

        if (check === 0) {

            sum++;
        }

    }

}

console.log(sum);
