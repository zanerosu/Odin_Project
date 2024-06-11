let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

export function knightMoves(startPos, endPos) {
    if (!checkValidCoord(startPos) || !checkValidCoord(endPos)) {
        return;
    }

    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    const queue = [[startPos, 0, [startPos]]];  // Queue entries are [position, number of moves, path]
    const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
    visited[startPos[0]][startPos[1]] = true;

    while (queue.length > 0) {
        const [[x, y], moves, path] = queue.shift();

        if (x === endPos[0] && y === endPos[1]) {
            return { moves, path };
        }

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (checkValidCoord([newX, newY]) && !visited[newX][newY]) {
                visited[newX][newY] = true;
                queue.push([[newX, newY], moves + 1, [...path, [newX, newY]]]);
            }
        }
    }

    return null;  // If no path found (shouldn't happen in a standard chessboard scenario)
}

function checkValidCoord(coordinate){
    if(coordinate[0] > 7 || coordinate[0] < 0 || coordinate[1] > 7 || coordinate[1] < 0){
        return false;
    }
    return true;
}