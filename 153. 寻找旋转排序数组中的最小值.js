var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    for (let i = 0, len = nums.length; i < len - 1; i++) {
        if (nums[i + 1] - nums[i] < 0) return nums[i + 1]
    }
    return nums[0]
};

var findMin = function(nums) {
    if(nums.length === 1) return nums[0]
    let left = 0;
    let right = nums.length - 1;
    if(nums[left] < nums[right]) return nums[0]
    
    while(right > left){
        let mid = left + parseInt((right - left) / 2)
        
        if(nums[mid + 1] < nums[mid]) return nums[mid + 1]
        if(nums[mid - 1] > nums[mid]) return nums[mid]
        
        if(nums[mid] > nums[0]){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
};