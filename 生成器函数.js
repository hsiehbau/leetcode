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

var nat = nature(n), ans, res = [];

while(!(ans = nat.next().done)){
    res.push(ans.value)
}
console.log(res)

function* primes(n){
    yield !/^.?$|^(..+?)\1+$/.test(Array(n + 1).join('1'))
}
  
  var pri = nature(n), ans, res = [];
  
  while(!(ans = pri.next().done)){
      res.push(ans.value)
  }
  console.log(res)