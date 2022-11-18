// selectionSort.js  - 选择排序


Array.prototype.selectionSort = function () {

  // 然后使用 for 循环 n - 1 轮
  for (let i = 0; i < this.length - 1; i++) {
    // 定义一个最小值下标 
    let indexMin = i   //d 此时最小值的下标改为 i ,表示第几轮 

    // 1. 使用 for 循环，找到最小值的下标 
    for (let j = i; j < this.length; j++) {  // j < this.length 长度
      // 判断 大小 
      if (this[j] < this[indexMin]) {
        // 如果当前值小于最小值， 则把当前值的下标赋值给 indexMin
        indexMin = j
      }
    }

    // 加一个判断， 如果 indexMin 和 i 不相等时，才交换位置
    if (indexMin !== i) {
      // 2. 交换位置,  最小值和第一位交换位置
      const temp = this[i]
      this[i] = this[indexMin]
      this[indexMin] = temp
    }
  }
}


let arr = [5, 4, 3, 2, 1]
arr.selectionSort()
