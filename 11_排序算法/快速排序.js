Array.prototype.quickSort = function () {
  // 1. 实现递归函数 
  const rec = (arr) => {
    // 9. 递归终止条件 : 当 此时数组长度为 1 时，本身就是有序数组 
    if (arr.length <= 1) {
      return arr
    }

    // 2. 定义 left 和 right 数组
    let left = []
    let right = []

    // 3. 找基准 
    let mid = arr[0]

    // 4. 循环 
    for (let i = 1; i < arr.length; i++) {
      // 5. 如果当前元素比基准要小
      if (arr[i] < mid) {
        // 6. 放到 left 数组中
        left.push(arr[i])
      } else {
        // 7 放到 right 数组中
        right.push(arr[i])
      }
    }

    // 8. 递归队 left 和 right 进行分区的操作 
    return [...rec(left), mid, ...rec(right)]
  }

  const res = rec(this)
  res.forEach((n, i) => this[i] = n)
}


let arr = [12, 3, 51, 2, 1, 61, 2, 3, 612, 3]
arr.quickSort()
