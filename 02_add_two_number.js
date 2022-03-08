/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
 */
/**
 * 链表的题： 
 * 
 * 解释链表： https://segmentfault.com/a/1190000038352941
 * 
 */

/**
 * 题目中给出了 定义了这个链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * l1 _ l2 都是链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

let l1 = [2, 4, 7],
    l2 = [5, 6, 4];
var addTwoNumbers = function(l1, l2) { // l1 l2 都是链表
    // 定义存储这两个链表相加得到的链表 dummy。 dummy 就是这个新的链表的头部，用来占位用的
    let dummy = new ListNode();
    // 定义 curr 用来遍历 新的dummy链表。 curr的.next 设置为l1 l2的个位数相加的值。 并生成一个新的节点(ListNode) 用于存放sum的值
    let curr = dummy; // 初始时， 指向链表头部的位置， dummy用来在新的链表占位的
    // 处理进位的变量 
    let carry = 0;

    // 书写逻辑
    while (l1 !== null || l2 !== null) {
        let sum = 0;
        // 判断l1, l2的值
        if (l1 !== null) {
            sum = sum + l1.val; // sum 等于 l1的第一个值
            l1 = l1.next; // l1 就等于它的下一位
        }
        if (l2 !== null) {
            sum = sum + l2.val; // sum此时等于，l1时候的sum 加上 l2的第一个值
            l2 = l2.next; // l2 的链表指向下一位
        }

        // 检查 carry 是否进了未
        sum = sum + carry; //  sum的值加上进位的值
        // 将curr.next 设为一个节点
        curr.next = new ListNode(sum % 10);
        // 取模运算，进行进位数据的复制
        carry = Math.floor(sum / 10); // Math.floor() 取整
        // 将curr 往前进位，进行取下一个节点
        curr = curr.next;
    }
    // 判断最后链表相加时，carry 的值是否为1
    if (carry > 0) {
        // 如果是1，直接添加到下一个节点
        curr.next = new ListNode(carry)
    }

    // 最后返回dummy.next;  也就是新的链表头部, dummy.next 能够取完所有节点的数据
    return dummy.next;
};


addTwoNumbers(l1, l2);