// insertionSort.js - 插入排序


Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    // 1. 记录第二个元素的下标的元素
    const temp = this[i]
    let j = i // 记录第二个元素的下标

    // 循环比较 第二个元素 和 第一个元素 大小
    while (j > 0) {
      if (this[j - 1] > temp) {
        // 如果第一个元素大于第二个元素， 则交换位置
        this[j] = this[j - 1]
      } else {
        break
      }
      j--
    }
    // 交换位置
    this[j] = temp
  }
}


let arr = [5, 4, 3, 2, 1]
arr.insertionSort()

