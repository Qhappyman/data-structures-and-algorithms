//双指针(java)
class Solution {
    public ListNode getKthFromEnd(ListNode head, int k) {
        ListNode last = head;
        ListNode fast = head; //设置快慢俩个指针，先让快指针移动k个单位
        if (head.next == null && k == 1) {
            return head;
        }
        for (; k > 0; k--) {
            fast = fast.next;
        }
        while (fast != null) { //快慢指针一起向后移，直到快指针指向null，此时慢指针就是要找的倒数第k个
            last = last.next;
            fast = fast.next;
        }
        return last;
    }
}
//使用栈
var getKthFromEnd = function (head, k) {
    let stack = [];
    let result;
    while (head) { //先将所有元素从头到尾入栈
        stack.push(head);
        head = head.next;
    }
    for (; k > 0; k--) { //依次取出k个元素，结果为倒数第k个节点
        result = stack.pop();
    }
    return result;
};