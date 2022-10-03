const graph = require('./图.js')

/**
 * const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
  }

*/

// 图的深度优先遍历 


// 定义一个遍历， 用于记录哪些节点访问过了 
const visited = new Set()

const dfs = (n) => {
  // 1. 访问根节点 
  console.log(n)
  // 把访问过的节点添加到 Set 中
  visited.add(n)

  // 2. 对没有访问过的节点 进行深度优点遍历 - 递归
  // 获取当前节点的相邻节点  graph[n] ， 使用 forEach 访问它, 进行递归
  graph[n].forEach((c) => {
    // 判断 当前节点是否是 已经访问过 
    if (!visited.has(c)) {
      dfs(c)
    }
  })
}

// 传入根节点
dfs(2)
/**
2
0
1
3
 */
