## 1 前言
提起JS的数据类型检测，大多数搞前端的朋友都知道有`typeof`和`instanceof`两个关键字可以用，其实还有另外2个方法`constructor`和`Object.prototype.toString.call()`可能知道的人并不多，并且前三种方法实际都有缺陷，只有最后一种toString的方法是完善。本文是笔者在听了珠峰教育的周啸天老师关于数据类型检测的讲课后对所学知识的整理和总结，希望对想了解该问题的读者有所帮助。
## 2 四种数据类型检测方法介绍
### 2.1 typeof的坑及原理
typeof用法最简单，直接在后面跟要检测的值。它可以用来检测除null之外的其它原生类型，但无法区分null和对象类型，原因是其在底层实现上是根据被检测类型的二进制前几位来检测的，而null和对象在底层的二进制表示前3位都是000，因此无法区分。
```js
typeof null // "object"
typeof [] // "object"
typeof /a*/ // "object"
```
### 2.2 instanceof的坑及原理
为了弥补typeof的缺陷，后面人们使用instanceof。instanceof用来判断某个实例是否属于某一类型。它的实现原理是通过上溯实例的原型链来判断是否属于某类型。由于原型是可以被修改的，因此使用instanceof来检测类型也不靠谱。而且instanceof也不能检测基本类型。比如下面的例子：
```js
let obj = {
  "val": 1
}
obj.__proto__ = []
obj instanceof Array // true
1 instanceof Number // false
```
### 2.3 constructor的坑及原理
constructor虽然支持基本类型，但因为对象的constructor也可以被随意修改，因此也不靠谱
```js
let obj = {
  "val": 1
}
obj.constructor = Array
obj.constructor == Array // true
```
### 2.4 Object.prototype.toString.call() 
Object.prototype.toString()方法返回的是"[object Object]",也即Object的类型字符串，也被称为stringTag，利用call()方法即可应用在需要被检测类型的值上。该方法是比较完善的（唯一的小缺点就是无法区分原生类型和相应的包装对象），但使用起来有点麻烦。实践中，对于除null之外的原生类型，可使用typeof，其它情况再用stringTag方法。
```js
Object.prototype.toString.call("a") // "[object String]"
Object.prototype.toString.call(String("a")) // "[object String]"
Object.prototype.toString.call(/a*/) // "[object RegExp]"
Object.prototype.toString.call({}) // "[object Object]"
```

## 3 将Object.prototype.toString封装成易于使用的类型检测方法

```js
// 参考jQuery的实现
(function() {
  let class2type = {}
  let toString = class2type.toString
  // 设定数据类型的映射表
  let classes = ["Number", "String", "Bollean", "Symbol", "Null", "Undefined", "Object", "Array", "RegExp", "Date", "Error", "Function"]
  classes.forEach(name=>{
    class2type[`[object ${name}]`]=name.toLowerCase()
  })
  function toType(val) {
    return class2type[toString.call(val)]
  }
  window.toType = toType
})()
```

## 4 总结
typeof函数虽然简单易用，但存在无法分清null和Object以及不能细分各种对象类型的缺陷，通过Object.prototype.toString.call()则能很好地弥补其不足，实践中可以将二者结合使用或者基于Object.prototype.toString.call()直接封装一个简易方法。

参考资料：
1. [JavaScript专题（六）类型检测](https://yuguang.blog.csdn.net/article/details/108130316?utm_medium=distribute.pc_relevant.none-task-blog-OPENSEARCH-5.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-5.control)

ps: 觉得对你有所帮助的请一键三连，你的认可就是对我最大的支持!^_^