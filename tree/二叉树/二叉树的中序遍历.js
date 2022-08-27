
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
const inorder = (root) => {
  // 如果根节点为空， 直接返回
  if (!root) return;

  // 1. 对根节点的左子树进行中序遍历 (递归)
  inorder(root.left)

  // 2. 访问根节点
  console.log(root.val)

  // 3. 对根节点的右子树进行中序遍历 (递归)
  inorder(root.right)
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
