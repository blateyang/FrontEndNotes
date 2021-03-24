
## 3 JavaScript
### 3.1 文法部分
1. 为何12.toString()会报错？

因为js引擎将12.toString解析成了数字`12.`和`toString()`,后者无法识别。正确写法是(12).toString()或者12..toString()
2. 在script标签引入的脚本中写export为何会报错？

因为含有export关键字的js文件是模块，而非普通脚本，通过script标签引入模块需要指明属性type="module"

3. 外部脚本必须包含script标签吗？

答案是不能包含，要理解清楚问题，不是在html中引用外部脚本，而是外部脚本本身。还要注意的点是外部脚本类型并非一定是js，浏览器会根据script标签的type属性进行相应解析。参考[面试小记---外部脚本必须包含 <script> 标签吗？](https://www.cnblogs.com/wymbk/p/5775549.html)
4. 介绍下JS的预处理机制

JS的语句分2大类，普通语句和声明型语句。对于声明语句存在预处理机制，预处理机制会提前处理var,let,const语句和function、class声明，以确定其中变量的含义。预处理由三个阶段组成：创建、初始化、赋值。
- 对于var语句，会将创建和初始化阶段（初始化为undefined)提升到当前作用域的开头；
- 对于let语句和const语句，只会将创建阶段提升到当前作用域的开头，并且const语句没有赋值阶段，因此在用let和const声明变量前使用该变量会因还未初始化而报错，被称为暂时性死区
- 对于function声明，会将创建、初始化（undefined)提升到全局最前面，而将赋值提升到当前作用域开头；
```javascript
console.log(foo) // undefined
if(true) {
  console.log(foo) // f foo()
  function foo() {}
}
```
- 对于class声明，在全局作用域中没有预处理，在函数和块级作用域中类似let和const，只将创建阶段提升到作用域开头
```javascript
console.log(c1) // Error: c1 is not defined
class c1 {}
if(true) {
  console.log(c2) // cannot access c2 before initialization
  class c2{}
}
```
参考：《重学前端》JavaScript语法（一）和JavaScript语法（二）

### 3.2 运行时部分
#### 3.2.1 数据结构
1. 为什么有的编程规范提倡用void 0代替undefined?

因为undefined并非关键字，而是一个全局变量，有可能被篡改（在局部作用域中），为了防止其被篡改，最好使用void 0，而且undefined也会被自动编译成void 0
2. 在JS中为何0.1+0.2不等于0.3？

因为由于存在浮点数精度的原因，js并不能精确地表示小数。正确的比较方法是借助Number.EPSILON，即Math.abs(0.1+0.2-0.3) < Number.EPSILON
3. ES6新加的Symbol是什么类型，有什么用？

Symbol是ES6新增的一种基本类型，用来表示非字符串的对象key集合，Symbol类型的变量具有唯一性，用来确保对象属性具有唯一标识符，不会发生属性冲突
4. 为何给对象添加的方法能用在基本类型上？

因为在基本类型上调用对象方法时JS会对基本类型进行装箱操作，构造一个对应类型的临时对象（Symbol除外），因此可以在基本类型上使用对象方法
5. js是面向对象还是基于对象？

“面向对象”和“基于对象”都实现了“封装”的概念，但是面向对象还实现了“继承和多态”，而“基于对象”没有实现这些。js虽然没有采用基于类的继承机制，但其使用了基于原型的继承机制，因此是面向对象的
6. 为什么在js中可以给对象自由添加属性，而其它的语言却不能？

js可以动态添加属性是因为js是一门高动态语言，为了实现高动态特性而被刻意设计成可以在运行时给对象添改属性
7. js中我们需要模拟类吗？

在ES6中不需要，因为ES6提供的class和extends语法可以模拟基于类的面向对象范式（本质还是基于原型运行时的语法糖，类方法定义在原型上，继承则通过以原型对象的拷贝为原型并调整prototype.constructor的指向实现）
```javascript
function Parent(name) {
    this.name = name
}

function Child(name) {
  Parent.call(this, name)
  this.type = "children"
}

Child.prototype = Object.create(Parent.prototye)
Child.prototype.constructor = Child

Child.prototype.greet = function() {
  console.log("I teach" + this.subject)
}
```
8. js中的对象如何分类？
- 由浏览器提供的宿主对象（如window) 
- 有js引擎提供的内置对象
  - 固有对象：标准规定，随js运行时创建而自动创建的对象实例，如Math
  - 原生对象：可通过内置构造器创建的对象，如new Date(),new String()
  - 普通对象：{}，Object.create, 自定义的类对象

#### 3.2.2 执行过程
1. 谈谈对事件循环的理解

事件循环是js提高程序执行效率，实现异步非阻塞I/O操作的运行机制，分为浏览器事件循环和Node事件循环。浏览器中的事件循环会按照基本原理及宏任务/微任务、执行过程和async/await介绍；node中的事件循环会按照宏任务/微任务、执行过程和process.nextTick的执行顺序介绍，其中process.nextTick的执行顺序在Node11前后有变化。
具体介绍可参考[事件循环笔记]()

2. this的有什么用？如何确定this的指向？

this是用来携带执行环境上下文的，它的指向由执行环境上下文确定。可以按照new绑定、call,apply,bind的显式绑定、对象.函数的隐式绑定、全局或匿名函数的默认绑定来确定，另外注意箭头函数由于没有自己的作用域，this指向要通过箭头函数的上级作用域确定。

3. js中到底有多少种函数？

主要有6类：
- 普通函数 function
- 箭头函数  ()=>{}
- 生成器  function*
- class中的方法
- class本身
- 带async的普通函数、箭头函数和生成器

4. js中的闭包怎么用？适合用在哪里？

闭包(closure)就是绑定了执行环境的函数（通常是函数内部的函数），适合用在需要访问函数内部变量或者希望函数内部变量不会随着函数调用结束而销毁的情况

5. 你知道哪些js语句？
- 普通语句
  - 语句块：{...}
  - 空语句：;
  - 表达式语句：由运算符连接变量或直接量构成，如a+b，它是真正干活产生执行效果的语句
  - 控制语句
    - if语句
    - switch语句
    - 循环语句
      - for循环
      - for in循环：遍历对象的可枚举属性
      - for of循环：遍历可迭代对象的迭代值，如数组、伪数组、生成器
      - for await of循环：遍历异步可迭代对象的迭代值，如异步生成器
      - while循环
      - do while循环
    - return语句
    - continue语句
    - break语句
  - try语句
  - throw语句
  - with语句：存在语义不明的弊端，不建议使用
  - debugger语句：类似打断点，代码执行到debugger语句会暂停
  
- 声明型语句
  - var语句
  - let语句
  - const语句
  - class语句
  - 函数声明
    - 普通函数声明
    - async函数声明
    - generator函数声明
    - async generator函数声明

6. js的垃圾回收机制是怎样的
js的内存管理是通过V8引擎自动管理的，实现机制是垃圾回收，早期采用的是引用计数策略，但因会产生循环引用问题后面改为采用标记清除策略。具体来说，V8引擎的垃圾回收分为新生代和老生代。
- 新生代：主要使用Scavenge进行管理，主要实现是cheney算法，用来对低频只被使用一次的变量进行垃圾回收。cheney算法将内存均分为2块空间：使用空间叫From，闲置空间叫True。新变量先分配到From空间，在空间快要被占满时将存活变量复制到To空间，然后清空From空间，之后调换From空间和To空间，继续进行内存分配。当变量被多次从From空间复制到To空间或者To空间的已用容量超过阈值，新生代会晋升为老生代。
- 老生代：结合使用Mark-Sweep和Mark-Compact算法对被高频使用的变量进行垃圾回收。Mark-Sweep算法在标记阶段遍历内存中的所有变量并标记需要被清理的变量（离开作用域的且不再被引用的变量），然后在清理阶段对被标记的变量进行清除。Mark-Sweep的缺点是标记清除后会产生内存碎片，而Mark-Compact算法可以避免产生碎片，Mark-Compact在标记完变量后会将它们归集在一片内存连续区域集中进行清理，不过因为涉及到大量的变量搬移，比较耗时。所以还是以使用Mark-Compact算法为主，当内存碎片过多导致内存不够再使用Mark-Compact算法整理。

7. 解释下面代码的结果并说明原因
```js
  function test() {
    console.log(test.prototype.constructor.constructor)
  }
```
答：test.prototype.constructor 指向函数自身，是Function的一个实例，它自身是没有constructor属性的，因此会上溯原型链，找到它的原型，也即Function.prototype，而Function.prototype.constructor就是Function