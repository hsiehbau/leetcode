
        
## 一、利用ES6 Set去重（ES6中最常用）      
        ```
            //ES6常用
        function unique (arr) {
            return Array.from(new Set(arr))
        }
        ```
+ 不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法.
## 二、利用for嵌套for，然后splice去重（ES5中最常用）
+ 双重循环占内存，效率也最低
+ 
    ```
        function distinct(a, b) {
        let arr = a.concat(b);
        for (let i=0, len=arr.length; i<len; i++) {
            for (let j=i+1; j<len; j++) {
                if (arr[i] == arr[j]) {
                    arr.splice(j, 1);
                    // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                    len--;
                    j--;
                }
            }
        }
        return arr
        }

    ```
## 三、利用indexOf去重
+ 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。
+ 
    ```
        function unique(arr) {
            if (!Array.isArray(arr)) {
                console.log('type error!')
                return
            }
            var array = [];
            for (var i = 0; i < arr.length; i++) {
                if (array .indexOf(arr[i]) === -1) {
                    array .push(arr[i])
                }
            }
            return array;
        }
        var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
        // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
            ```
                
## 四、利用sort()


        
        <script>
        //简单法：不一样的推进空数组，
        function uniq(array){
            var temp = []
            for (let i = 0; i < array.length; i++){
                if(temp.indexOf(array[i]) == -1){
                    //值不在新数组就push进去
                    temp.push(array[i])
                }
            }
            return temp
        }
        </script>
        
        <script >
        // 思路：获取没重复的最右一值放入新数组
        /*
        * 推荐的方法
        *
        * 方法的实现代码相当酷炫，
        * 实现思路：获取没重复的最右一值放入新数组。
        * （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）*/
        function uniq(array){
            var temp = [];
            var index = [];
            var l = array.length;
            for(var i = 0; i < l; i++) {
                for(var j = i + 1; j < l; j++){
                    if (array[i] === array[j]){
                        i++;
                        j = i;
                    }
                }
                temp.push(array[i]);
                index.push(i);
            }
            console.log(index);
            return temp;
        }

        var aa = [1,2,2,3,5,3,6,5];
        console.log(uniq(aa));
        </script>

        <script>
        


        </script>

    </body>
</html>