const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) return 0;

    const dfs = (grid, i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
            return;
        }
        grid[i][j] = 'W'; // Mark the landmass as visited
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    };

    let islandCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'L') {
                islandCount++;
                dfs(grid, i, j);
            }
        }
    }

    return islandCount;
}

// Example usage:
const map1 = [
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"],
];

const map2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
];

console.log(numIslands(map1));  // Output: 1
console.log(numIslands(map2));  // Output: 3

};

module.exports = getTotalIsles;