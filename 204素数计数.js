var countPrimes = function(num) {
    let count = 0
    for(let i = 0; i < num; i++){
        if(isPrimeNum2(i)) {
            count++
        }
    }
    return count
}

/**
 * 
 * @param {number} num 
 * @return {boolean} 
 */

function isPrimeNum2(num){
    return !/^.?$|^(..+?)\1+$/.test(Array(num + 1).join('1'))
}

function isPrimeNum(num){
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i==0){
            return false;
        }
    }
    return true;
}
