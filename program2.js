const decodeTheRing = function (message, pattern) {
  const memo = new Map(); // For memoizing results
  
  const matchHelper = (i, j) => {
      const key = `${i}-${j}`;
      
      if (memo.has(key)) return memo.get(key);
      
      if (i === message.length && j === pattern.length) return true;
      if (j === pattern.length) return false;
      
      if (j < pattern.length && (pattern[j] === message[i] || pattern[j] === '?')) {
          const result = i < message.length && matchHelper(i + 1, j + 1);
          memo.set(key, result);
          return result;
      }

      if (pattern[j] === '*') {
          const result = matchHelper(i, j + 1) || (i < message.length && matchHelper(i + 1, j));
          memo.set(key, result);
          return result;
      }
      
      memo.set(key, false);
      return false;
  };

  return matchHelper(0, 0);
};

module.exports = decodeTheRing;
