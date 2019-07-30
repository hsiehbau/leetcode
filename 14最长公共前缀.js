 /**
 * @param {string[]} strs
 * @return {string}
 * 实质都是双循环，挨个匹配
 */
var longestCommonPrefix = function(strs) {
   let firstStrs = strs[0]
   let res = ''
   if(strs.length === 0) return ''
   for(let i = 0; i < firstStrs.length; i++) {
       for(let j = 1; j < strs.length; j++){
           if(firstStrs[i] !== strs[j][i]){
            return res
           }
       }
       res += firstStrs[i]
   }
   return res
};

var longestCommonPrefix = function(strs) {
    let final = ""

    if (!strs.length) {
        return final
    }

    for (let i = 0; i < strs[0].length; i++) {

        let reg = new RegExp("^" + strs[0].slice(0, i + 1))
        let flag = true
        strs.forEach(str=>{
            if (!str.match(reg)) {
                flag = false
            }
        }
        )
        if (flag) {
            final = strs[0].slice(0, i + 1)
        }
    }
    return final
}




var longestCommonPrefix = function(strs){
    let res = ''
    if(strs.length == 0) return res
    for(let i = 0; i < strs[0].length; i++){
        let reg = new RegExp('^' + strs.slice(0,i + 1))
        let flag = true
        strs.forEach(str => {
            if(!str.match(reg)){
                flag = false
            }
        })
        if(flag){
            res = strs[0].slice(0,i + 1)
        }
    }
    return res
}
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    
    for(let j = 0; j < strs[0].length; j++) {
        let char = strs[0][j];
        for(let i = 1; i < strs.length; i++) {
            if(strs[i][j] !== char || j >= strs[i].length) {
                return strs[i].substr(0, j);
            }
        }
    }
    return strs[0];
};

var longestCommonPrefix = function(strs) {
    if(!strs || strs && !strs.length) return ""
        strs.sort()
      console.log('TCL: longestCommonPrefix -> strs', strs)
    
      let smStr = Math.min(strs[0].length, strs[strs.length - 1].length)
      let i = 0
      while (i < smStr && strs[0][i] == strs[strs.length - 1][i]) {
        i++
      }
      return strs[0].slice(0, i)
    }