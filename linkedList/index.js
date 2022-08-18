
// 认识链表 


const a = {
  val: "a"
}

const b = {
  val: "b",
}

const c = {
  val: "c",
}

const d = {
  val: "d",
}


// 使用链表 关联 上面元素 
a.next = b;
b.next = c;
c.next = d;
d.next = null;
// 如此就创建了链表 , 此时链表的头部就是 a




// 对链表的操作 

// 1. 遍历链表 
// 目的： 安装顺序 打印 a b c d

// 1.1 声明一个 指针 p,  p 指向 a 节点 ;  链表的首节点 
let p = a;
// 1.2 循环遍历
while (p) {
  // 打印数据 
  console.log(p.val);
  // 把 p 指针指向下一个节点
  p = p.next;
}



// 2. 在链表中插入值 
// 目的： 在链表的中间插入值 , 插入到 c  和 d 之间 
const e = { val: 'e' }

// 2.1 把 c 的 next 指向  e 
c.next = e;
// 2.2 把 e 的 next 指向 d
e.next = d;

// 这样就完成了插入操作




// 3. 删除链表中的值
// 目的： 删除链表中的值 , 删除 c  和 d 之间的值
// 直接把 c 的指针指向 d 就行了 
c.next = d;
