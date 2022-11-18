
// bubbleSort.js  - 冒泡排序 

Array.prototype.bubbleSort = function () {
  // 原型方法  -》 此时接收的 this 是执行 bubbleSort 方法的数组 
  // console.log(this, '----')


  // 循环 n - 1 次， 因为最后一次不需要比较，它已经冒泡过了 
  for (let i = 0; i < this.length - 1; i++) {
    // j < this.length - 1 - i  ； - i 是因为每次循环都会把最大的数冒泡到最后，所以不需要再比较了
    for (let j = 0; j < this.length - 1 - i; j++) {
      // this.length - 1 -> 取到倒数第二位， 最后一位使用 j+1 来获取，  为了防止数组越界
      if (this[j] > this[j + 1]) {
        // 如果前一位大于后一位， 交换位置
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }


}



let arr = [5, 4, 3, 2, 1]
arr.bubbleSort() 
