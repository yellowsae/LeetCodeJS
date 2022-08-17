/**
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

  请你实现 RecentCounter 类：

  RecentCounter() 初始化计数器，请求数为 0 。
  int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
  保证 每次对 ping 的调用都使用比之前更大的 t 值。



    输入：
  ["RecentCounter", "ping", "ping", "ping", "ping"]
  [[], [1], [100], [3001], [3002]]
  输出：
  [null, 1, 2, 3, 3]

  解释：
  RecentCounter recentCounter = new RecentCounter();
  recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
  recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
  recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
  recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
*/



// 最近的请求次数 

/**
 * 解题思路： 
 * 因为要定义一个 链表，把最近的请求存放进去， 题目给的时间 为 300ms, 3000ms 内的请求放入 队列中
 * 如果不在这个请求中，提出队列 ，  最后返回队列的长度
 * 
 * 当  1 请求时   最近请求的范围为 [ -2999, 1 ]   ,  1 在这个范围内 ， 把 1 添加到队列中， 此时队列长度为 1，返回 [null, 1 ]
 * 当  100 请求时   最近请求的范围为 [ -2900, 100 ]   ,  100 在这个范围内 ， 把 100 添加到队列中， 此时队列长度为 2，返回 [null, 1,  2]
 * 当  3001 请求时   最近请求的范围为 [ 1 , 3001 ]   ,  3001 在这个范围内 ， 把 3001 添加到队列中， 此时队列长度为 3，返回 [null, 1,  2, 3]
 * 当  3002 请求时   最近请求的范围为 [ 2 , 3002 ]   ,  3002 在这个范围内 ，  把 3000 添加到队列中， 但是这个时候，1请求已经不在这个返回了，把1队列， 此时队列长度为 3，返回 [null, 1,  2, 3, 3]
 */



// 定义类
var RecentCounter = function () {
  // 定义一个队列, 保证没执行 ping 都访问的是同一个队列 
  this.queue = [];
};

/** 
* @param {number} t
* @return {number}
*/

// 实现ping 方法
RecentCounter.prototype.ping = function (t) {
  // 每执行一次请求 ping , 就把这个请求放入队列中
  this.queue.push(t);

  // 判断队列中的请求是否在最近的请求范围内
  while (
    // 队列的头部 是否 < t - 3000 ； 因为 t-3000 就是范围的头部，所以可以用 < 来判断
    this.queue[0] < t - 3000
  ) {
    // 如果不在范围内，就把队列的头部提出队列
    this.queue.shift();
  }

  // 返回队列的长度
  return this.queue.length;
}


/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()  // 实例化类
 * var param_1 = obj.ping(t)  // 调用 ping 方法 
 */

var obj = new RecentCounter()  // 实例化类
// 调用 ping 方法 
var param_1 = obj.ping(1) // 1
var param_1 = obj.ping(100) // 2
var param_1 = obj.ping(3001) // 3
var param_1 = obj.ping(3002) // 3

console.log(param_1) // 1
