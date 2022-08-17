

// 面试题 

setTimeout(() => {
  console.log(1)
}, 0)

console.log(2)

// https://www.wolai.com/xq6DMYBDGcLumppwWG4FNf


/**
 * 因为在执行这段代码刚执行时候，会有一个主事件放入 任务队列 里面  → 
 * JS 引擎会从任务队列中拿到这个主事件去执行 → 
 * 执行到 setTimeout 时发现是异步任务，会交给 WebAPI 来执行这个异步任务， 主事件继续执行后面的代码  →
 * WebAPI 执行异步任务会把回调函数存放到 任务队列 中 ，但是发现任务队列中主事件还没有执行完  → 
 * 所以当主事件完打印2 后再执行 打印1 的回调函数
 */
