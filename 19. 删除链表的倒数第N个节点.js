var removeNthFromEnd = function(head, n) {
   
     let slow = head
     let fast = head
     //先让fast走n个
     while(n > 0){
         fast = fast.next
         n--
     }
     //删除一个元素的倒数第一个时，到n是0的时候就是走到next，此时为空，也该返回空
     if(fast == null){
        return head.next
     }

    //再同时走
     while(fast.next !== null){
        slow = slow.next
        fast = fast.next
     }
     //走到头时候，目标值在快慢指针中间
     slow.next = slow.next.next
     return head
};