var BSTIterator = function(root) {
    //拿到生成器以便调用  
    this.generator = traverse(root)
    //需马上调用hasnext，并取出第一个值，
    this.generated = this.generator.next()

    function * traverse(root){
        if(root){
            yield * traverse(root.left)
            yield (root.val)
            yield* traverse(root.right)
        }
    }
};

BSTIterator.prototype.next = function() {
    var value = this.generated.value()
    this.generated = this.generator.next()
    return value
};

BSTIterator.prototype.hasNext = function() {
    return !this.generated.done
};




/**
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.current = root;
    this.stack = [];
    this.currentVal;
    this.Iterator;
    this.run();
};
/**
 * [run description]
 *
 * @return  {[type]}  [return description]
 */
BSTIterator.prototype.run = function() {
    if(!this.Iterator){
        let self = this;
        this.Iterator = (function*(){
            while(self.current || self.stack.length){
                while(self.current){
                    self.stack.push(self.current)
                    self.current = self.current.left
                }
                self.current = self.stack.pop()
                self.currentVal = self.current.val
                self.current = self.current.right
                yield self.currentVal
            }
        }());
    }
};
/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let res = this.Iterator.next()
    if(!res.done){
        return this.currentVal
    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.current || this.stack.length){
        return true
    }
    return false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


//中序遍历得到升序序列
var BSTIterator = function(root) {
   const tree = [];
   function copyTree(r) {
       if(r === null) {
          return;
       }
       copyTree(r.left);
       tree.push(r.val);
       copyTree(r.right);
   }
   copyTree(root);
   this.tree = tree;
   this.index = 0;
};

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function() {
   const element = this.tree[this.index];
   
   this.index += 1;
   return element;
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
   return this.index < this.tree.length;
};





function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  /**
   * @param {TreeNode} root
   */
  let BSTIterator = function(root) {
    //console.log('Entered ctor for BSTIterator');
    this.root = root;
  
    this.valuesArray = [];
    this.gatherNumbers(root, this.valuesArray);
  
    this.nextIndex = 0;
  };
  
  BSTIterator.prototype.gatherNumbers = function(node, numbers) {
  
    if (!node) {
      return [];
    }
  
    if (node.left) {
      this.gatherNumbers(node.left, numbers);
    }
  
    numbers.push(node.val);
  
    if (node.right) {
      this.gatherNumbers(node.right, numbers);
    }
  };
  
  /**
   * @return the next smallest number
   * @return {number}
   */
  BSTIterator.prototype.next = function() {
    return this.valuesArray[this.nextIndex++];
  };
  
  
  /**
   * @return whether we have a next smallest number
   * @return {boolean}
   */
  BSTIterator.prototype.hasNext = function() {
    //console.log('Entered hasNext function for BSTIterator');
    return ((this.nextIndex + 1) <= this.valuesArray.length);
  };
  
  module.exports = {
    BSTIterator: BSTIterator,
    TreeNode: TreeNode,
  };






