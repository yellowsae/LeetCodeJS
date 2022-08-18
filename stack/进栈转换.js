
function TwoCode(num) {
  // 1. 定义栈 
  let stack = [];

  // 定义死循环
  while (true) {
    // 2. 除数取余
    const index = Math.floor(num / 2)
    stack.push(num % 2)
    num = index

    if (num === 0) {
      break
    }
  }

  // 3. 返回二进制, 将 栈数据反转, 然后拼接为字符串 
  return Number(stack.reverse().join(""))
}

console.log(TwoCode(10))
console.log(TwoCode(35))
