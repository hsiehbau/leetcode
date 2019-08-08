const isValidSudoku = arr => {
    for (let i = 0; i < 9; i++) {
      // 遍历行*列
      let row = new Set(), col = new Set()
      for (let j = 0; j < 9; j++) {
        if (arr[i][j] !== '.') {
          if (row.has(arr[i][j])) return false
          row.add(arr[i][j])
        }
        if (arr[j][i] !== '.') {
          if (col.has(arr[j][i])) return false
          col.add(arr[j][i])
        }
      }
      // 遍历3*3小宫格
      let block = new Set()
      let x = (i / 3 >> 0) * 3, y = i % 3 * 3
      for (let j = 0; j < 9; j++) {
        if (arr[x][y] !== '.') {
          if (block.has(arr[x][y])) return false
          block.add(arr[x][y])
        }
        y++
        if ((j + 1) % 3 === 0) {
          x += 1
          y -= 3
        }
      }
    }
    return true
  }
  
  public boolean isValidSudoku(char[][] board) {
    Set seen = new HashSet();
    for (int i=0; i<9; ++i) {
        for (int j=0; j<9; ++j) {
            char number = board[i][j];
            if (number != '.')
                if (!seen.add(number + " in row " + i) ||
                    !seen.add(number + " in column " + j) ||
                    !seen.add(number + " in block " + i/3 + "-" + j/3))
                    return false;
        }
    }
    return true;
}

const boardIterator = (board) => {
    return {
        [Symbol.iterator]: function* () {
          for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
              yield [x, y, board[y][x]];
            }
          }
        }
    };
};
const getZone = (x, y) => Math.floor(x/3) + Math.floor(y/3)*3;
const getKey = (type, location, value) => `${type}${location}${value}`;

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const seen = new Set();
    for (const [x, y, val] of boardIterator(board)) {
        if (val !== '.') {
            const keys = [ getKey('c', x, val), getKey('r', y, val), getKey('z', getZone(x, y), val) ];
            
            if (keys.some(key => seen.has(key))) return false;
            
            keys.forEach(key => seen.add(key));
        }
    }
    return true;
};