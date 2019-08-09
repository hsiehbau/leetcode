/**
 * 作业：作生成器函数生成自然数列 素数序列
nature(n)//小于等于n的自然数
primes(n)//前n个素数
 *  */
function* nature(n){
  while(n > 0){
      yield n
      n--
  }
}

[...nature(20)]

var nat = nature(n), ans, res = [];

while(!(ans = nat.next()).done){
    res.push(ans.value)
}
console.log(res)

function isPrimes(n){
    return n = !/^.?$|^(..+?)\1+$/.test(Array(n + 1).join('1'))
}
function* primes(n){
    var c = 0
    for(var i = 2; c < n; i++){
        if(isPrimes(i)){
            c++
            yield i
        }
    }
}
//测试：[...primes(5)]
// -->[2, 3, 5, 7, 11]

function* primes(n){
    var flag = !/^.?$|^(..+?)\1+$/.test(Array(n + 1).join('1'))
    while(flag && n > 0){
        yield n
        n-- 
    }
}
  
  var pri = primes(n), ans, res = [];
  
  while(!(ans = pri.next()).done){
      res.push(ans.value)
  }
  console.log(res)


  //数字的倒序输出，用生成器函数

Number.prototype.digits = function*(){
    var n = this//this不能放左边所以得用一个变量接住
    while(n > 0){
        var digit = n % 10
        yield digit
        n = (n - digit) / 10
    }
}
//调用number方法
  for(var digit of 3291..digits()){
      console.log(digit)
  }

