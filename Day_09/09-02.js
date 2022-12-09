const fs = require("fs");

const data = fs.readFileSync("Day_09/09_input.txt", "utf8");
const lines = data.split("\n");

const ropeLength = 10;

const rope = [];

for (let i = 0; i < ropeLength; i++) {

    rope.push({ x: 0, y: 0 })
}

const positions = [];

for (let line of lines) {

    const direction = line.split(" ");

    for (let i = 0; i < direction[1]; i++) {

        if (direction[0] === "U") {

            rope[0].y++;
        }
        else if (direction[0] === "D") {

            rope[0].y--;
        }
        else if (direction[0] === "R") {

            rope[0].x++;
        }
        else {

            rope[0].x--;
        }

        for (let j = 1; j < ropeLength; j++) {

            if (rope[j - 1].x - rope[j].x > 1 && rope[j - 1].y - rope[j].y > 1) {

                rope[j].y++;
                rope[j].x++;
            }
            else if (rope[j - 1].x - rope[j].x > 1 && rope[j - 1].y - rope[j].y < -1) {

                rope[j].y--;
                rope[j].x++;
            }
            else if (rope[j - 1].x - rope[j].x < -1 && rope[j - 1].y - rope[j].y > 1) {

                rope[j].y++;
                rope[j].x--;
            }
            else if (rope[j - 1].x - rope[j].x < -1 && rope[j - 1].y - rope[j].y < -1) {

                rope[j].y--;
                rope[j].x--;
            }
            else if (rope[j - 1].x - rope[j].x > 1) {

                rope[j].y = rope[j - 1].y;
                rope[j].x++;
            }
            else if (rope[j - 1].x - rope[j].x < -1) {

                rope[j].y = rope[j - 1].y;
                rope[j].x--;
            }
            else if (rope[j - 1].y - rope[j].y > 1) {

                rope[j].x = rope[j - 1].x;
                rope[j].y++;
            }
            else if (rope[j - 1].y - rope[j].y < -1) {

                rope[j].x = rope[j - 1].x;
                rope[j].y--;
            }

            if (j === ropeLength - 1) {

                positions.push(`${rope[j].x},${rope[j].y}`)
            }
        }
    }
}

console.log([...new Set(positions)].length);