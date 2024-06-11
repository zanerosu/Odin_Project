import { knightMoves } from "./knightsTravails.js";

console.log("test")

const result = knightMoves([0, 0], [7, 7]);

if (result) {
    console.log(`You made it in ${result.moves} moves! Here's your path:`);
    result.path.forEach(coord => {
        console.log(`[${coord[0]}, ${coord[1]}]`);
    });
}