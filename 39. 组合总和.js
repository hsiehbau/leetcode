/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target, i = 0, res = [], nums = []) {
    if(sum(nums) == target){
        res.push(nums.slice())
        return 
    }
    for(; i < candidates.length; i++){
        if(sum(nums) < target){
            nums.push(candidates[i])
            combinationSum(candidates, target, i + 1, res , nums)
            nums.pop()
        }
    }
    return res
};

function sum(ary){
    return ary.reduce((a,b) => a + b, 0)
}