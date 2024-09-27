const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const dfs = (grid, i, j) => {
      // If we're out of bounds or it's water, stop the DFS
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
          return;
      }
      // Mark the current cell as visited (turn it into water)
      grid[i][j] = 'W';
      
      // Explore all four directions
      dfs(grid, i + 1, j);  // down
      dfs(grid, i - 1, j);  // up
      dfs(grid, i, j + 1);  // right
      dfs(grid, i, j - 1);  // left
  };

  let islandCount = 0;

  // Traverse the entire grid
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 'L') {  // Found unvisited land
              islandCount++;         // Increment island count
              dfs(grid, i, j);       // Start DFS to mark the whole island
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

console.log(getTotalIsles(map1));  // Output: 1
console.log(getTotalIsles(map2));  // Output: 3

module.exports = getTotalIsles;  // Only include this in a Node.js environment
