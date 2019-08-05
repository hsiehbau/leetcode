/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let arr = []
    nums.forEach(function(item){
        let index = binarySearch(arr,item) + 1

        if(arr[index] === undefined){
            arr[index] = item
        } else {
            arr[index] = Math.min(arr[index], item)
        }
    });
    return arr.length
};
var binarySearch = function(arr, target){
    let start = 0
    let end = arr.length - 1
    while(start <= end){
        let mid = ~~((start + end) >> 1)
        if(arr[mid] >= target){
            end = mid - 1  
        } else {
            start = mid + 1
        }
    }
    return end
}


var lengthOfLIS = function(nums) {
    //const dp = [];
    //return findIncreasSubs(nums, 0, -1, dp);
    if (nums.length === 0) return 0;
    const dp = Array(nums.length).fill(0);
    dp[0] = nums[0];

    let maxLength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < dp[0]) {
            dp[0] = nums[i];
        } else if (nums[i] > dp[maxLength - 1]) {
            dp[maxLength++] = nums[i];
        } else {
            dp[ceilSearch(dp, -1, maxLength - 1, nums[i])] = nums[i];
        }
    }
    return maxLength;
};

function ceilSearch(arr, s, e, val) {
    while (e - s > 1) {
        const mid = s + Math.floor((e - s) / 2);
        if (arr[mid] >= val) {
            e = mid;
        } else {
            s = mid;
        }
    }
    return e;
}

function findIncreasSubs(nums, i, prev, dp) {
    if (i === nums.length) return 0;
    
    dp[i] = dp[i] || [];
    if (dp[i][prev + 1] === undefined) {
        let c1 = 0;
        if (prev === -1 || nums[prev] < nums[i]) {
            c1 = 1 + findIncreasSubs(nums, i + 1, i, dp);
        }
        const c2 = findIncreasSubs(nums, i + 1, prev, dp);
        dp[i][prev + 1] = Math.max(c1, c2);
    }
    return dp[i][prev + 1];
}


var lengthOfLIS = function(nums) {
    const n = nums.length;
    
    let dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    
    for (let i = 0; i < n; i++) {
      const index = binarySearch(dp, nums[i], i);
      dp[index] = nums[i];
    }
  
    for (let j = n - 1; j >= 0; j--) {
      if (dp[j] !== Number.MAX_SAFE_INTEGER) {
        return j + 1;
      }
    }
  
    return 0;
  };
  
  function binarySearch(dp, target, end) {
    let low = 0;
    let high = end;
    
    while (low <= high) {
      const middle = low + Math.floor((high - low) / 2);
      if (dp[middle] === target) {
        return middle;
      }
      else if (dp[middle] > target) {
        high = middle - 1;
      }
      else {
        low = middle + 1;
      }
    }
    
    return low;
  }

  var lengthOfLIS = function(nums) {
    if (nums == null || nums.length === 0) {
        return 0; 
    }
    const dp = [];
    const len = nums.length;
    dp[0] = 1;
    let result = 1;
    for (let i=1; i< len; i++) {
        let j = i - 1;
        let max = 1;
        while(j >=0) {
            if (nums[j] < nums[i]) {
                max = Math.max(max, dp[j] + 1);
            }
            j--;
        }
        dp[i] =  max;
        result = Math.max(max, result);
    }
    return result;
    
};