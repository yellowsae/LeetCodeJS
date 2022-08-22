
// 定义引用类型变量 
const obj = {}

const arr = []

const func = () => { }



// 1. obj.__proto__ === Object.prototype
// 定义的 obj对象 的原型对象  指向 Object的原型对象 
console.log(obj.__proto__ === Object.prototype)  // true 

// 原生的 Object.prototype.__proto__ 指向 null
console.log(Object.prototype.__proto__ === null)  // true



// 2. 定义 arr 的 __proto__ 指向 Array.prototype 
console.log(arr.__proto__ === Array.prototype)  // true

// 原生的 Array.prototype.__proto__ 指向 Object.prototype
console.log(Array.prototype.__proto__ === Object.prototype)  // true


// 3. 定义 func 的 __proto__ 指向 Function.prototype
console.log(func.__proto__ === Function.prototype)  // true

// 原生的 Function.prototype.__proto__ 指向 Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype)  // true





// instanceof 

// A 会 沿着原型链能找到 B.prototype  , 那么 A instance B 为 true 
console.log(obj instanceof Object)  // true

console.log(arr instanceof Array)  // true
console.log(arr instanceof Object)
console.log(func instanceof Function) // true
console.log(func instanceof Object) // true




// 手写 instanceof 

function instanceOf(A, B) {
  // 判断 a 是否是 b 的实例 

  // 1. 定义指针 
  let p = A

  // 2. 循环遍历
  while (p) {
    // 4. 判断逻辑  A.__proto__ === B.prototype
    if (p === B.prototype) return true
    // 3. 遍历原型链 
    p = p.__proto__   // __proto__ 就是指针 
  }
  // 遍历完成，没有相等 返回 false 
  return false
}

console.log(instanceOf([], Object)) // true
console.log(instanceOf([], Array)) // true
console.log(instanceOf([], Function)) // false
console.log(instanceOf({}, Object)) // true
console.log(instanceOf({}, Array)) // false
console.log(instanceOf(1, Number)) // true
console.log(instanceOf(1, Function)) // false
console.log(instanceOf("1", Object)) // true   // "1" -> String.prototype -> Object.prototype -> null
console.log(instanceOf("1", String))





