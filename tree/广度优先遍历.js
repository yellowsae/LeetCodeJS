// bfs.js

// 定义树节点
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        }
      ]
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        }
      ]
    }
  ]
}

/**
 * 广度优先遍历算法口诀 
 * 1. 新建立一个队列， 把根节点入队 
 * 2. 把队头出队 并访问
 * 3. 把队头的 children 挨个入队 
 * 4. 重复 第二三步， 直到队列为空 
 */


// 定义 广度优先遍历的 函数 
const bfs = (root) => {
  // 1. 新建一个队列 , 把根节点入队 
  const queue = [root]

  // 4. 重复 2 3 步 直到队列为空
  while (queue.length > 0) {

    // 2. 把队头出队， 并访问 
    const n = queue.shift()
    console.log(n.val)

    // 3. 把队头的 children 挨个入队 
    n.children.forEach(child => {
      // 入队 
      queue.push(child)
    })
  }
}

// 执行
bfs(tree)

/**
a
b
c
d
e
f
g
 */
