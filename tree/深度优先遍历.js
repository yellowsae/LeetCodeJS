

// dfs.js 

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


// 深度优先遍历函数

// 传入一个 根节点 
const dfs = (root) => {
  // 1. 访问根节点 
  console.log(root.val)

  // 2. 对根节点的 children 挨个进行 深度优先遍历
  // root.children.forEach((child) => dfs(child))

  // 代码优化
  root.children.forEach(dfs)
}


dfs(tree)
/**
  a
  b
  d
  e
  c
  f
  g
 */
