
## 3 JavaScript
### 3.1 文法部分
1. 为何12.toString()会报错？
因为js引擎将12.toString解析成了数字`12.`和`toString()`,后者无法识别。正确写法是(12).toString()或者12..toString()
2. 在script标签引入的脚本中写export为何会报错？
因为含有export关键字的js文件是模块，而非普通脚本，通过script标签引入模块需要指明属性type="module"
3. 介绍下JS的预处理机制
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

1. 外部脚本必须包含script标签吗？
答案是不能包含，要理解清楚问题，不是在html中引用外部脚本，而是外部脚本本身。还要注意的点是外部脚本类型并非一定是js，浏览器会根据script标签的type属性进行相应解析。参考[面试小记---外部脚本必须包含 <script> 标签吗？](https://www.cnblogs.com/wymbk/p/5775549.html)