var minDiffInBST = function(root) {
    let array = [];
    mid(root, array);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length - 1; i++) {
      min = Math.min(min, array[i + 1] - array[i]);
    }
    return min;
  };
   
  var mid = (root, array) => {
    if (root) {
      mid(root.left, array);
      array.push(root.val);
      mid(root.right, array);
    } 
}