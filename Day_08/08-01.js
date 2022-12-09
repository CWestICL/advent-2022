const fs = require("fs");

const data = fs.readFileSync("Day_08/08_input.txt", "utf8");
const lines = data.split("\n");

const grid = [];

for (let line of lines) {

    if (line) {

        grid.push(line.split(""));
    }
}

let total = 0;

for (let y = 0; y < grid.length; y++) {

    for (let x = 0; x < grid[y].length; x++) {

        if (y !== 0 && y !== 98 && x !== 0 && x !== 98) {

            let visibleYu = true;
            let visibleYd = true;
            let visibleXl = true;
            let visibleXr = true;

            for (let yu = 0; yu < y; yu++) {

                if (grid[yu][x] >= grid[y][x]) {

                    visibleYu = false;
                }
            }

            for (let yd = y + 1; yd < grid.length; yd++) {

                if (grid[yd][x] >= grid[y][x]) {

                    visibleYd = false;
                }
            }

            for (let xl = 0; xl < x; xl++) {

                if (grid[y][xl] >= grid[y][x]) {

                    visibleXl = false;
                }
            }

            for (let xr = x + 1; xr < grid[y].length; xr++) {

                if (grid[y][xr] >= grid[y][x]) {

                    visibleXr = false;
                }
            }

            if (visibleYu || visibleYd || visibleXl || visibleXr) {

                total++;
            }
        }
        else {

            total++;
        }
    }
}

console.log(total);