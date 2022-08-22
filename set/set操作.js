

let mySet = new Set();



// 1. add  添加元素 
mySet.add(1);
mySet.add(5);
mySet.add(5);

// Set(2) { 1, 5 }  ,   set 的唯一性 
mySet.add("some text");
mySet.add({ true: false });
let o = { true: false }
mySet.add(o);   // Set(5) { 1, 5, 'some text', { true: false }, { true: false } }  // 因为这两个对象在内存中的地址是不一样的 
console.log(mySet);




// 2. has 判断集合中是否有某个元素
const has = mySet.has(1); // true
const has2 = mySet.has(2); // false
const has3 = mySet.has(o); // true
const has4 = mySet.has({ true: false }); // false  /// 因为 这里查找的 {} 和 { true: false } 是两个不同的对象
console.log(has4)




// 3. delete 删除元素 ,  size 查看 set 的尺寸数量 
mySet.delete(1);  // Set(4) { 5, 'some text', { true: false }, { true: false } }
// console.log(mySet.size);  // 4




// 4. 遍历  set 操作 -> for - of
for (let item of mySet) console.log(item)

// 使用 set.key() 方法迭代 
for (let item of mySet.keys()) console.log(item)

// 使用 value() 方法迭代 
for (let item of mySet.values()) console.log(item)

// 使用 entries() 方法迭代 ; 可以返回 [key - value] 
for (let item of mySet.entries()) console.log(item)
/**
 *[ 5, 5 ]
  [ 'some text', 'some text' ]
  [ { true: false }, { true: false } ]
  [ { true: false }, { true: false } ]
 */




// 5. Set 和 Array 的互转 
// ... 扩展运算符 
let myArr = [...mySet]
console.log(myArr)

// Array.from() 方法
let myArr2 = Array.from(mySet)


// 把 Array 转为 Set 
const mySet2 = new Set(myArr)



// 6. 求交集 
// 1. mySet 转为 Array 
// 2. 通过 filter 循环 判断 mySet2 中是否存在该元素
const intersection = new Set([...mySet].filter(item => mySet2.has(item)))


// 7. 求差集 
// 判断 没有就行了
const difference = new Set([...mySet].filter(item => !mySet2.has(item)))
