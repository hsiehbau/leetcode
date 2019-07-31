
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

 