//将字符串当代码构造一个函数出来。。。。。。。。。。。
function require(path){
    var fileContent = readFile(path)
    var f = new Function('exports', fileContent);
    function(exports){
        var exports = {}
        exports.add =  function add(a, b){
            return a + b
        } 
    
        exports.sub =  function sub(a, b){
            return a - b
        } 
    
        return exports
    }
    var exports = f('exports' )
    return exports
}


//add.js

    
//b.js
var exports = require('a.js')
var c = exports.add(1,2)  

function require(path){
    var fileContent = readFile(path)
    var f = new Function('exports', fileContent);

    var exports = {}
    var module = {}
    module.exports = exports
    f(exports, module)
    return module.exports
}
