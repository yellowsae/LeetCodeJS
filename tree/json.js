
const json = {
  a: {
    b: {
      c: 1
    }
  },
  d: [
    1,
    2
  ]
}



// 深度优先遍历 

const dfs = (n, patch) => {
  console.log(n)

  // 使用 Object.keys 获取json 所有的 key ->[a d]
  // 并且遍历 a  d  进行 深度优先遍历
  Object.keys(n).forEach(key => {
    // 递归深度优先遍历 
    dfs(n[key], patch.concat(key))
  })
}

// 使用 [] 接收 数据 
dfs(json, [])
