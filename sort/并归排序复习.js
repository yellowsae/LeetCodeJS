



Array.prototype.MySrot = function () {
  // 合 - 分 
  const rec = (arr) => {
    // 分 
    // 4. 停止条件
    if (arr.length === 1) return arr
    // 1. mid 
    let mid = Math.floor(arr.length / 2)
    // 2. left / right 
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    // 3 递归 
    let orderLeft = rec(left)
    let orderRight = rec(right)

    // 合 
    // 1. res 
    let res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  let res = rec(this)
  console.log(res)
}


let arr = [5, 4, 3, 2, 1]

arr.MySrot()

