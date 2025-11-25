// 1631. Path With Minimum Effort
// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
    let isValidPos = (x, y) => {
        return 0 <= x && 0 <= y && x < m && y < n;
    }

    let dfsCheck = (effor) => {
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        let seen = [];
        for (let i = 0; i < m; i++) {
            seen.push(new Array(n).fill(false));
        }
        
        seen[0][0] = true;
        let stack = [[0, 0]];

        while(stack.length) {

            let elem = stack.pop();

            if (elem[0] == m - 1 && elem[1] == n - 1) return true;

            for (const direction of directions) {
                let dx = elem[0] + direction[0];
                let dy = elem[1] + direction[1];
                if (isValidPos(dx, dy) && !seen[dx][dy]) {
                    if (Math.abs(heights[elem[0]][elem[1]] - heights[dx][dy]) <= effor) {
                        seen[dx][dy] = true;
                        stack.push([dx, dy]);
                    }
                }
            }
        }

        return false;
    }

    let m = heights.length;
    let n = heights[0].length;
    
    let left = 0;
    let right = 0;
    for (const arr of heights) {
        right = Math.max(right, Math.max(...arr));
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (dfsCheck(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));
console.log(minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]]));
console.log(minimumEffortPath([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]));