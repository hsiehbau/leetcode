
/**
 * 
 * @param {*} s 
 * substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
 * str.substring(indexStart[, indexEnd])
 * 一个典型的测试用例'abcdabcabcdeggg'
 * 思路： 先匹配的单个字符串，出现新的字符时候加进str，同时res变长；再次找到相同的时候就用substring，以index + 1为开始索引，返回同等长度或者子串的子串，继续找到不一样的再加进str；
 * str一开始存的是abcd,
 * 在用例‘abcdacabcde’中到ca的时候res > str.length
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0//存放最长公共字串的长度
    let str = ''//存放字串
    for(let i = 0; i < s.length; i++){
        let char = s.charAt(i)
        let index = str.indexOf(char)
        if(index === -1){
            str += char
            res = res < str.length? str.length : res
        } else {
            str = str.substring(index + 1) + char
        }
    }
      return res
 };

 var lengthOfLongestSubstring = function(s) {
    var length = s.length;
    if (length <= 1) {
        return length;
    }
    let from = 0;
    let to = 1;
    let result = 1;
    while (to < length) {
        let sub = s.slice(from, to);
        let i = sub.indexOf(s[to]);
        if (i !== -1) {
            from = from + i + 1;
        }
        to++;
        result = to - from > result ? to - from : result;
    }
    return result;
};

//用hashmap优化

var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let maxLength = 0;
    let num = 0;
    let stringArr = s.split('');
    
    for(let i = 0; i < stringArr.length; i++){
        let char = stringArr[i];
        let val = map.get(char);
        
        if(val !== undefined && num <= val ) num = val + 1;
        map.set(char, i);
        val = map.get(char);
        if(i - num + 1 > maxLength) maxLength = i - num + 1;
    }
    return maxLength;
};



var lengthOfLongestSubstring = function(s) {
    var start = 0, maxLen = 0;
    var map = new Map();
  
    for(var i = 0; i < s.length; i++) {
        var ch = s[i];
      
        if(map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
      
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }
  
    return maxLen;
  };
//用集合
var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let res = 0,
        tail = 0,
        curBest = 0;
    
    for(let head = 0; head < s.length; head++) {
        let c = s.charAt(head);
        if (!seen.has(c)) {
            curBest += 1;;
        } else {
            res = Math.max(res, curBest);
            while (s.charAt(tail)!==c) {
                seen.delete(s[tail]);
                tail += 1;
            }
            tail += 1;
            curBest = head - tail + 1;
        }
        seen.add(c);
    }
    return Math.max(res, curBest);
};

 