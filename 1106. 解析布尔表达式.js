/**
 * @param {string} expression
 * @return {boolean}
 */
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expr) {
    var i = 0
    var tree = parse()
    return compile2(tree)

    function compile2(tree) {
        if (tree.type == 'literal') {
            if (tree.value) {
				return 'true'
			} else {
				return 'fasle'
            }
        }
        if (tree.type == 'fcall') {
            if (tree.name == '!') {
                return compile2(tree.parameters[0]) + ' not'
            }
            if (tree.name == '&') {
                return tree.parameters.map(compile2).join(' ') + ' and'
            }
            if (tree.name == '|') {
                return tree.parameters.map(compile2).join(' ') + ' or'
            }
        }
	}
	
    function compile(tree) {
        if (tree.type == 'literal') {
            if (tree.value) {
				return 'true'
			} else {
				return 'fasle'
            }
        }
        if (tree.type == 'fcall') {
            if (tree.name == '!') {
                return 'not(' + compile(tree.parameters[0]) + ')'
            }
            if (tree.name == '&') {
                return 'and(' + tree.parameters.map(compile).join(',') + ')'
            }
            if (tree.name == '|') {
                return 'or(' + tree.parameters.map(compile).join(',') + ')'
            }
        }
	}

    //求一个语法树的结果
    function run(tree) {
        if (tree.type == 'literal') {
            return tree.value
        }
        if (tree.type == 'fcall') {
            if (tree.name == '!') {
                return !run(tree.parameters[0])
            }
            if (tree.name == '&') {
                return tree.parameters.map(run).every(it => it == true)
            }
            if (tree.name == '|') {
                return tree.parameters.map(run).some(it => it == true)
            }
        }
    }
    
    //解析一个布尔表达式为一个语法树
    function parse() {
        if (expr[i] == 't') {
            i++
            return {
                type: 'literal',
                value: true,
            }
        }
        if (expr[i] == 'f') {
            i++
            return {
                type: 'literal',
                value: false,
            }
        }
        if (expr[i] == '!') {
            return parseNot()
        }
        if (expr[i] == '&') {
            return parseAnd()
        }
        if (expr[i] == '|') {
            return parseOr()
        }
    }

    //解析一个非运算为一个布尔值
    function parseNot() {
        var result = {
            type: 'fcall',
            name: '!',
            parameters: []
        }
        i += 2
        var tree = parse()
        i++
        result.parameters.push(tree)
        return result
    }
    
    function parseAnd() { 
        var result = {
            type: 'fcall',
            name: '&',
            parameters: []
        }
        i += 2
        
        while(true) {
            var tree = parse()
            result.parameters.push(tree)
            if (expr[i] == ')') {
                i++
                break
            }
            if (expr[i] == ',') {
                i++
            }
        }
        return result
    }
    
    function parseOr() {
        var result = {
            type: 'fcall',
            name: '|',
            parameters: []
        }
        i += 2
        while(true) {
            var tree = parse()
            result.parameters.push(tree)
            if (expr[i] == ')') {
                i++
                break
            }
            if (expr[i] == ',') {
                i++
            }
        }
        return result
    }
};