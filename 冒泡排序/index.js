

// 冒泡排序

let array = [
  1, 2, 312, 3, 341, 23, 2151, 23, 4, 17, 734, 5, 883, 23, 4, 8
]


// 数组原生的sort方法 
// array.sort((a, b) => a - b)

// 会改变原数组
console.log(array)



// 冒泡排序 
// 从小到大排序 
// 实现： 旁边比较，大的往后移动，一轮下来，最大的在最后面

function MySort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp

        // 结构赋值方式 交互数据
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(MySort(array))
