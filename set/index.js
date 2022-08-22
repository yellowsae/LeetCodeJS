

// 集合 


// 1. 去重操作 
let arr = [1, 1, 2, 2]
const arr2 = [...new Set(arr)]




// 2. 判断元素是否在集合中 
// 使用 has 方法 
const set = new Set(arr)
const has = set.has(3) // false


// 3. 求交集 
const set2 = new Set([2, 3])

const set3 = new Set([...set].filter(item => set2.has(item)))
// 1. 把 set 转换为数组
// 2. 利用 filter 方法筛选出 set2 也有的值
