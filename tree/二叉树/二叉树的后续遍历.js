
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

const postorder = (root) => {
  // 如果根节点为空， 直接返回 
  if (!root) return;

  // 1. 对根节点的左子树进行后续遍历 (递归)
  postorder(root.left)

  // 2. 对根节点的右子树进行后续遍历 (递归)
  postorder(root.right)

  // 3. 访问根节点 
  console.log(root.val)
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
