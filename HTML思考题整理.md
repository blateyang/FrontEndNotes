## 1 HTML
1. localStorage,sessionStorage,Cookie的比较
这三个东西都和浏览器的数据存储有关
- localStorage: 用于同源页面的浏览器本地存储, 其存储的数据生命周期是永久的，除非手动清除
```javascript
localStorage.setItem('myCat', 'Tom');
let cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');
// 移除所有
localStorage.clear();
```
- sessionStorage: 用于同源页面的浏览器会话存储，其存储的数据生命周期是页面会话期间（页面会话在浏览器打开期间一直保持，即使刷新或者关闭后恢复页面也会保持原来的会话），页面会话结束数据会被清除
用法示例：
```javascript
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```
- Cookie: 它是服务器发送到用户浏览器并保存到本地的一小块数据，这块数据会在浏览器下次访问相同服务器时被携带上，用于告知服务器两次请求是否来自同一浏览器，可用来进行会话状态管理和跟踪用户行为。可使用`document.cookie`获取当前网页的cookie，使用`document.cookie="key=keyValue"`给当前cookie添加键值对

参考[MDN WebStorage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API),[MDN document.cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)
2. HTML有哪几类标签？
- 语义类标签：标签本身带有一定的语义，如`header`,`footer`,`p`,`h1~h6`
- 元(meta)信息标签：用于描述文档自身信息的标签，如`head`,`title`,`meta`
- 链接类标签：产生超链接或链接外部资源的标签，`link`,`a`,`area`
- 替换类标签：将对应的资源替换标签本身，如`script`,`video`,`radio`,`img`等媒体类标签和`iframe`

3. H5的新特性有哪些？
- 增加了更多的语义化标签，如`header`,`footer`,`nav`
- 表单类：增加了更多的表单部件，如`datalist`;给input标签增加了更多的type，如number,date,url；给input标签增加了更多的属性，如placeholder,required
- 媒体类：增加了`video`和`radio`，还有canvas绘画API
- 事件类：增加了拖拽和释放(drag and drop)API; 增加了ondrag,onresize,onscroll等事件
- 存储类：localStorage和sessionStorage
- 通信类：单个TCP连接上进行全双工通信的webSocket

参考[https://www.cnblogs.com/ainyi/p/9777841.html](https://www.cnblogs.com/ainyi/p/9777841.html)

4. 什么是H5以及如何书写H5?
H5是HTML的新标准，其设计目标是无需任何额外的插件（flash等）就可以传输所有内容，由万维网联盟(W3C)和WHATWG（Web Hypertext Application Technology Working Group，Web超文本应用技术工作组）合作创建。书写H5需要在html文件开头使用`<!DOCTYPE html>`声明。

5. 链接类标签有哪些？它们之间的区别是什么？
链接类标签有link,a,area。
- link通常用于不显示的链接，比如head中css样式表的链接，link链接按照rel属性又细分为两大类，超链接类和外部资源类，rel=stylesheet就是典型的外部资源类link
- a和area用于会显示在页面的链接，其中area可以指定非矩形的热区，常与`img`或`map`（定义图像映射）标签连用

6. 为什么link一个css要用href，而引入外部js文件要用src?
因为外部js文件是通过`script`标签而非`link`标签引入的，而`script`标签是替换型标签，通过src属性指定替换源

7. H5的页面结构与其前面版本有何区别？
H5的页面结构通过header,article,section,aside,footer等语义化标签描述，而之前版本的HTML缺少这些语义化标签，只能用div标签来描述

8. SVG和canvas都能在HTML上绘制图形，二者有何区别？
- SVG是可伸缩矢量图形，一种基于文本的图形语言，具有分辨率独立（不会因为分辨率降低而失真）和绘制并记忆的特点，通过SVG绘制的图形可以被记住和操作（画完了可以改），但绘制速度较慢
```html
<!--利用SVG绘制矩形-->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
<rect style="fill: rgb(0, 0, 255); stroke-width: 1px; stroke: rgb(0, 0, 0);" height="[object SVGAnimatedLength]" width="[object SVGAnimatedLength]">
</rect>
```
- Canvas画布具有分辨率依赖和绘制并遗忘的特点，一旦绘制完成就不能访问和处理像素（画完了不可以改），但绘制速度较快
```html
<!--利用canvas绘制矩形-->
<body>
  <canvas id="myCanvas"></canvas>
  <script>
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      ctx.rect(20,20,150,100);
      ctx.stroke();
  </script>
</body>
```
