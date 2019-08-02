/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []
    
    for(let i = 0;i <= 3; i++){
        let part1 = s.slice(0, i)
        if(isIPPart(part1)){
            for(let j = i + 1; j <= i + 3;j++){
                let part2 = s.slice(i,j)
                if(isIPPart(part2)){
                    for(k = j + 1;k <= j+3;k++){
                        let part3 = s.slice(j, k)
                        if(isIPPart(part3)){
                            let part4 = s.slice(k)
                            if(isIPPart(part4)){
                                res.push([part1, part2, part3, part4].join('.'))
                            }
                        
                        }
                    }
                }
        
            }
        }
    }
    return res
};

    function isIPPart(s){
        if(s[0] == '0'){
            //如果第一个是0就判断是不是连续的两个0
            return s.length == 1
        }
        return s.length && s < 256
    }



//四层循环太过冗余，下面用  递归  优化
var restoreIpAddresses = function(s, parts = [], res = []){
    
    if(parts.length == 4 && s.length == 0){
        res.push(parts.join('.'))
    }

    for(let i = 1;i <= 3; i++){
        var part = s.slice(0,i)
        if(isIPPart(part)){
            parts.push(part)
            restoreIpAddresses(s.slice(i),parts, res)
            parts.pop()
        }
    }
    return res
}

