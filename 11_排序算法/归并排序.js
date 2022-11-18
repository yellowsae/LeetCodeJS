// mergeSort.js  - 归并排序


Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    // 终止递归： 当 arr.length == 1 时，表示只有一个元素时， 就不用再分了
    if (arr.length === 1) return arr;   // 返回 arr 得到长度为 1 的数组， 也就是分好的数组

    // 获取中间的下标 
    const mid = Math.floor(arr.length / 2)

    // 得到左边的数组
    let left = arr.slice(0, mid)

    // 得到右边的数组
    let right = arr.slice(mid, arr.length)


    // 调用递归： 把左边 或 右边数值进行 分成两半的操作 
    // 得到有序的 左边数组 和 有序的右边数组 orderLeft 和 orderRight ， 元素只有一个的数组
    let orderLeft = rec(left)
    let orderRight = rec(right)


    // 合并操作 
    // 1. 定义 空数组 res
    let res = []
    // 2. 当 左边数组 和 右边数组有值时候进行循环 
    while (orderLeft.length || orderRight.length) {
      // 有值时 进行对比 
      if (orderLeft.length && orderRight.length) {
        // 谁小 就 插入到 res 中 ? 可以简化为三元运算符
        if (orderLeft[0] < orderRight[0]) {
          res.push(orderLeft.shift())
        } else {
          res.push(orderRight.shift())
        }
      } else if (orderLeft.length) {
        // 当执行完上边，但是左边数组还有值 时， 直接插入到 res 中
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }

    // 3 返回 res
    return res
  }
  // 执行函数 rec ， 并返回结果 res 
  let res = rec(this)

  // 拷贝到 this 上 
  res.forEach((n, i) => this[i] = n)
}


let arr = [5, 4, 3, 2, 1]
arr.mergeSort()


/**
 * 时间复杂度 ： O(N * logN)
 *  分： O(logN)
 *  合： O(N)
 */
