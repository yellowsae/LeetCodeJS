// 1. 实现一个最小堆 
class MiniHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    return i - 1 >> 1
  }

  getLeftIndex(i) {
    return i * 2 + 1
  }

  getRightIndex(i) {
    return i * 2 + 2
  }

  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }


  shiftDown(index) {
    //下移就是不断的与子节点进行比较, 与最小的子节点进行交换,  直到所有的子节点都 大于 等于 index 位置的值
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)

    // 3 比较 
    // 3.1 如果左侧节点的值小于 index 位置的值, 需要交换
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      // 下移 
      this.shiftDown(leftIndex)
    }
    // 3.2 如果右侧节点的值小于 index 位置的值, 需要交换
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  // 上移
  shiftUp(index) {
    if (index === 0) return

    // 获取当前节点的父节点 
    const parentIndex = this.getParentIndex(index)

    // 比较 
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      // 继续上移 
      this.shiftUp(parentIndex)
    }
  }

  insert(value) {
    this.heap.push(value)
    // 上移, 传入插入的索引， 也就是最后一位
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    // 1. 删除堆顶元素: 直接把堆最后一个元素换位堆顶元素，这样可以避免堆的结构被破坏 
    this.heap[0] = this.heap.pop()

    // 下移 , 传入 0 下标
    this.shiftDown(0)
  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }
}
const h = new MiniHeap()
h.insert(3)
console.log(h.peek(), h.size())
h.insert(2)
h.insert(1)
h.pop()
console.log(h.peek(), h.size())
