
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

### 3.2 运行时部分
4. 为什么有的编程规范提倡用void 0代替undefined?
因为undefined并非关键字，而是一个全局变量，有可能被篡改（在局部作用域中），为了防止其被篡改，最好使用void 0，而且undefined也会被自动编译成void 0
5. 在JS中为何0.1+0.2不等于0.3？
因为由于存在浮点数精度的原因，js并不能精确地表示小数。正确的比较方法是借助Number.EPSILON，即Math.abs(0.1+0.2-0.3) < Number.EPSILON
6. ES6新加的Symbol是什么类型，有什么用？
Symbol是ES6新增的一种基本类型，用来表示非字符串的对象key集合，Symbol类型的变量具有唯一性，用来确保对象属性具有唯一标识符，不会发生属性冲突
7. 为何给对象添加的方法能用在基本类型上？
因为在基本类型上调用对象方法时JS会对基本类型进行装箱操作，构造一个对应类型的临时对象（Symbol除外），因此可以在基本类型上使用对象方法
8. js是面向对象还是基于对象？
“面向对象”和“基于对象”都实现了“封装”的概念，但是面向对象还实现了“继承和多态”，而“基于对象”没有实现这些。js虽然没有采用基于类的继承机制，但其使用了基于原型的继承机制，因此是面向对象的
9. 为什么在js中可以给对象自由添加属性，而其它的语言却不能？
js可以动态添加属性是因为基于原型的系统更多地与高动态语言配合且提倡运行时的原型修改，js为了实现动态性而被刻意设计成这样
10. js中我们需要模拟类吗？
在ES6中不需要，因为ES6提供的class和extends语法可以模拟基于类的面向对象范式（本质还是基于原型运行时的语法糖，类方法定义在原型上，继承则通过以原型对象的拷贝为原型并调整prototype.constructor的指向实现）
```javascript
function Parent(name) {
    this.name = name
}

function Child(name) {
  Parent.call(this, name)
  this.type = "children"
}

Child.prototype = Object.create(Child.prototye)
Child.prototype.constructor = Child

Child.prototype.greet = function() {
  console.log("I teach" + this.subject)
}
```
11. js中的对象如何分类？
- 由浏览器提供的宿主对象（如window) 
- 有js引擎提供的内置对象
  - 固有对象：标准规定，随js运行时创建而自动创建的对象实例，如Math
  - 原生对象：可通过内置构造器创建的对象，如new Date(),new String()
  - 普通对象
1. 外部脚本必须包含script标签吗？
答案是不能包含，要理解清楚问题，不是在html中引用外部脚本，而是外部脚本本身。还要注意的点是外部脚本类型并非一定是js，浏览器会根据script标签的type属性进行相应解析。参考[面试小记---外部脚本必须包含 <script> 标签吗？](https://www.cnblogs.com/wymbk/p/5775549.html)