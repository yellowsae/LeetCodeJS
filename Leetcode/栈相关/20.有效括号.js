// https://www.wolai.com/2hafMHDRhKG87NftnBgNTK

var arr = [
  '()',
  '()[]{}',
  '(]',
  '([)]',
  '{[]}',
  '()[]{}',
]
// s = "()"
// s = "()[]{}"
// s = "(]"
// s = "([)]"
// s = "{[]}"



/**
 * @param {string} s
 * @return {boolean}
 */

// 判断是否是有效括号
function isValid(s) {

  // 优化代码 如果 s 的长度为基数 -> 返回 false
  if (s.length % 2 === 1) return false


  // 创建一个栈
  const stack = []

  // 循环遍历字符串 
  for (let i = 0; i < s.length; i++) {
    // 拿到字符串的单个数据 
    const c = s[i]

    // 判断是否是左括号
    if (
      (c === "(") || (c === "{") || (c === "[")
    ) {
      // 如果是左括号
      // 进行入栈操作 
      stack.push(c)
    } else {
      // 如果是右括号
      // 获取栈顶元素 
      const top = stack[stack.length - 1]
      // 判断栈顶元素 是否与 c 这个右括号相匹配  
      if (
        (top === "(" && c === ")") ||
        (top === "{" && c === "}") ||
        (top === "[" && c === "]")
      ) {
        // 出栈
        stack.pop()
      } else {
        // 如果不匹配 则返回 false
        return false
      }
    }
  }

  // 循环完成，判断栈是否为空
  return stack.length === 0
}


for (let i = 0; i < arr.length; i++) {
  console.log(isValid(arr[i]))

}


// {} () []

// 判断是否是有效括号
function isValid_2(s) {
  //  创建一个栈  
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]  // 取值 
    if (
      (c === "(") || (c === "[") || (c === "{")
    ) {
      // 入栈
      stack.push(c)
    } else {
      // c 为 右括号
      // 判断栈顶元素是否与 c 匹配
      const top = stack[stack.length - 1]
      if (
        (top === "(" && c === ")") ||
        (top === "[" && c === "]") ||
        (top === "{" && c === "}")
      ) {
        // 出栈
        stack.pop()
      }
    }
  }
  return stack.length === 0
}
console.log("00000")
for (let i = 0; i < arr.length; i++) {
  console.log(isValid(arr[i]))

}
