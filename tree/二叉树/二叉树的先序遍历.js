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
const preorder = (root) => {
  // 如果根节点为空， 直接返回
  if (!root) { return };

  // 1. 访问根节点 
  console.log(root.val)
  // 2. 递归访问 它的 左子树 
  preorder(root.left)
  // 3. 递归访问 它的 右子树
  preorder(root.right)
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
