var rotate = function(nums, k) {
    k %= nums.length
    var temp = []
    if(k){
        temp = nums.slice(-k)
        nums.splice(-k, k)
        Array.prototype.unshift.apply(nums, temp)
    }

};

nums.unshift(...nums.splice(-k));