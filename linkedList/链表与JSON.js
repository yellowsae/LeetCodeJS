

let json = {
  a: {
    b: {
      c: 1
    }
  },

  d: {
    e: 2
  }
}



let patch = ["a", "b", "c"]  // patch 记录JSON属性的路径




// 问题： 验证 patch 指向的路径，得到的值是多少


// 定义指针 p
let p = json

// 循环 patch
patch.forEach(k => {
  p = p[k]
})

// 最后 p 指针沿着 patch 找到 c = 1
console.log(p) // 1

