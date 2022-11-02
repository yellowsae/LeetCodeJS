

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


// 快速排序
// 所有人都根据中间值，分成两边，左边都比中间值小，右边都比中间值大
// O(n * logn)
function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  // 1. 找到中间值
  let flag = arr[0]
  // 2. 定义排序的左边和右边 arr
  let left = []
  let right = []

  // 3. 遍历数组，找到左边和右边的值
  for (let i = 1; i < arr.length; i++) {
    // 判断大小
    if (arr[i] < flag) {
      left.push(arr[i])   // 左边添加 array
    } else {
      right.push(arr[i])  // 右边添加 array
    }
  }

  // 4. 递归调用
  return quickSort(left).concat(flag, quickSort(right))
}

console.log(quickSort(array))



// 原地排序
// 使用双指针 一前一后 遍历，找到符合条件的数据，交换位置
// 空间复杂度 O(1)


function quick1(arr, start, end) {
  // 1. 初始化标志位 
  let init = start
  // 2. 获取标志位的值
  let flag = arr[init]

  // 3. 遍历数组
  start++
  while (start <= end) {
    // 3.1 对比，如果 右边 > 标志位，右边指针向左移动
    while (arr[end] > flag) {
      end--
    }

    // 3.2 对比，如果 左边 < 标志位，左边指针向右移动
    while (arr[start] < flag) {
      start++
    }
    // 遍历到这里 start 和 end 指针都已经找到位置了
    // 3.3 交换位置
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }

  // 4. 交换标志位 -> 
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]]
  return start
}

function quickSort1(arr, start, end) {
  // 1. 当 start < end 进行排序 
  if (start < end) {
    // 2. 找到标志位置
    let index = quick1(arr, start, end)

    // 3. 递归遍历
    // 左边
    quickSort1(arr, start, index - 1)
    // 右边
    quickSort1(arr, index, end)
  }
  // 返回 Array
  return arr
}

console.log("原地排序", quickSort1(array, 0, array.length - 1))
