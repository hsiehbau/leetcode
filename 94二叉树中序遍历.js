/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     var res = [];
//     var s = [];
//     //根节点先入栈
//     var p = root;
    
//     while(p || s.length > 0){
//         //直至左节点为空
//         while(p){
//             s.push(p);
//             p = p.left
//         }
//         //出栈找根节点，
//         p = s.pop();
//         res.push(p.val);
//         p = p.right;
//     }
//     return res
// };

var inorderTraversal = function(root, res = []) {
    if(root){
        res = res.concat(inorderTraversal(root.left))
        res.push(root.val)
        res = res.concat(inorderTraversal(root.right))
    }
    return res
}
    



