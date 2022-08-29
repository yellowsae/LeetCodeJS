
// 导入树
const bt = require('./tree')

// 中序遍历算法口诀 
/**
 * 1. 对根节点的左子树进行中序遍历 (递归)
 * 2. 访问根节点
 * 3. 对根节点的右子树进行中序遍历 (递归)
 */

/**
 *     1
 *   /   \
 *  2     3
 * / \   / \
 * 4  5  6  7
 * 
 */

// 中序遍历函数 
// const inorder = (root) => {
//   // 如果根节点为空， 直接返回
//   if (!root) return;

//   // 1. 对根节点的左子树进行中序遍历 (递归)
//   inorder(root.left)

//   // 2. 访问根节点
//   console.log(root.val)

//   // 3. 对根节点的右子树进行中序遍历 (递归)
//   inorder(root.right)
// }




// 中序遍历 非递归版
/**
 * 1. 把所有的左子树 存入堆栈里
 */
const inorder = (root) => {
  if (!root) return;

  // 定义栈 在模拟函数调用堆栈 
  const stack = []
  let p = root

  while (stack.length || p) {
    // 1. 定义一个指针
    while (p) {
      // 推入到栈 
      stack.push(p)
      // 获取到所有的左节点 
      p = p.left
    }

    // 访问 栈 最尽头的节点 
    const n = stack.pop()
    console.log(n.val)

    // 在访问右节点 
    p = n.right
  }
}


inorder(bt)
/**
4
2
5
1
6
3
7
 */
