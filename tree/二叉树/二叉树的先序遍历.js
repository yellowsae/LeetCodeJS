/**
 *     1
 *   /   \
 *  2     3
 * / \   / \
 * 4  5  6  7
 * 
 */

// 导入 tree
const bt = require('./tree')

// console.log(bt)

// 先序遍历 口诀 
/**
 * 1. 访问 根节点 
 * 2. 对根节点的左子树进行先序遍历 (递归)
 * 3. 对根节点的右子树进行先序遍历 (递归)
 */
// const preorder = (root) => {
//   // 如果根节点为空， 直接返回
//   if (!root) { return };

//   // 1. 访问根节点 
//   console.log(root.val)
//   // 2. 递归访问 它的 左子树 
//   preorder(root.left)
//   // 3. 递归访问 它的 右子树
//   preorder(root.right)
// }




/**
 * 先根遍历 非递归版 
 * - 主要基于 函数调用堆栈 
 *  用栈这个数据结构 来模拟 递归
 */

const preorder = (root) => {
  // 如果根节点为空， 直接返回
  if (!root) { return };

  // 开始 把 根节点 入栈
  // 代表当前访问堆栈的是 根节点
  const stack = [root]

  // 当栈不为空时， 一直循环
  while (stack.length) {

    // 1. 访问 根节点的值 
    const n = stack.pop()
    console.log(n.val)

    // 因为栈就是 后进先出 => 所以先放入 right 的内容
    // 3. 把 根节点的 右子树 入栈
    if (n.right) stack.push(n.right)

    // 2. 如果 n.left 存在 就 推入函数调用栈中
    if (n.left) stack.push(n.left)
  }

}



preorder(bt)

/**
1
2
4
5
3
6
7
 */
