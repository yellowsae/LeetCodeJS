Array.prototype.binarySearch = function (item) {

  // 1. 定义两个 变量 ：一个是数组的头部， 和 this.length - 1 数组的长度 
  let low = 0  // 最小下标 
  let high = this.length - 1  // 最大下标

  // 2. 循环 : 当 最小下标 <=  最大下标
  while (low <= high) {
    // 3. 获取数组中间下标 
    let mid = Math.floor((low + high) / 2)

    // 4. 获取中间元素 
    const element = this[mid]

    // 5. 判断中间元素是否是要查找的元素
    if (element < item) {
      // 中间 < 目标值 
      // 然后最小下标：改为  mid + 1  -> 二分
      low = mid + 1
    } else if (element > item) {
      // 中间 > 目标值 
      // 然后最大下标：改为  mid - 1  -> 二分
      high = mid - 1
    } else {
      // 等于 目标值 -> 中间元素的下标
      return mid
    }
  }

  // 6. 如果没有找到，返回 -1
  return - 1
}

const res = [1, 2, 3, 4, 5].binarySearch(-5)
