
const bt = require('./tree')

/**
 * 二叉树的后续遍历 算法口诀 
 * 1. 对根节点的左子树进行后续遍历 (递归)
 * 2. 对根节点的右子树进行后续遍历 (递归)
 * 3. 访问根节点
 */

/**
 *     1
 *   /   \
 *  2     3
 * / \   / \
 *4   5 6   7
 * 
 */

// const postorder = (root) => {
//   // 如果根节点为空， 直接返回 
//   if (!root) return;

//   // 1. 对根节点的左子树进行后续遍历 (递归)
//   postorder(root.left)

//   // 2. 对根节点的右子树进行后续遍历 (递归)
//   postorder(root.right)

//   // 3. 访问根节点 
//   console.log(root.val)
// }




// 后续遍历 非递归版
// 可以 把 先序遍历 非递归版  的结果 反过来就行 
// 并把 先序遍历 的输出 添加到 一个栈里， 然后再倒叙输出 这个栈

const postorder = (root) => {
  // 如果根节点为空， 直接返回 
  if (!root) return;

  // 倒叙输出的栈 
  const outputStack = []
  //  先序遍历 
  const stack = [root]
  while (stack.length) {
    // 取出栈顶元素
    const n = stack.pop()
    // 把要输出的节点， 推入到 outputStack
    outputStack.push(n)

    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }

  while (outputStack.length) {
    const n = outputStack.pop()
    console.log(n.val)
  }
}
postorder(bt)
/**
4
5
2
6
7
3
1
 */
