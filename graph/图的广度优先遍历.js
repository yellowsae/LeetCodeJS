const graph = require('./图.js')



// 图的广度优先遍历

// 1. 建立一个队列 把 根节点入队 
const q = [2]

// 定义 visited 用于记录哪些节点访问过了
const visited = new Set()
// 把起始节点 也添加到 visited 中
visited.add(2)


while (q.length) {
  // 2. 把队头出队， 访问它
  const n = q.shift()
  console.log(n)

  graph[n].forEach(c => {
    // 3. 把当前节点的没有访问过的相邻节点入队
    if (!visited.has(c)) {
      q.push(c)
      // 把 c 添加到 visited 中 , 在队列的节点添加到 visited 中
      visited.add(c)
    }
  })
}


/**
2
0
3
1
 */
