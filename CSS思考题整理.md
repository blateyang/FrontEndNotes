## 2 CSS
0. CSS层叠样式表中的“层叠”一词如何理解？

在CSS中，多个规则可以作用于同一个html元素，后出现的同级别规则会覆盖先出现的规则，优先级高的规则会覆盖优先级低的规则，就像叠盘子一样

1. CSS是一门样式规则语言，它的规则有哪几种类型？

CSS的规则主要有两大类，@规则和普通规则。

@规则用来设定样式表整体或条件规则组内的规则，根据@后面跟的标识符主要有以下几类：
- @charset指定样式表使用的字符集
- @import导入外部样式表
- @namespace指定命名空间
- 嵌套@规则，是嵌套语句的子集，即可作为样式表的一个语句，也可用在条件规则组里
  - @media用于媒体查询(满足媒体查询条件则条件规则组里的规则生效)
  - @keyframses用于定义动画关键帧
  - @supports用于条件查询（满足给定条件则条件规则组里的规则生效）
  - 其它

普通规则由选择器和声明语句构成，选择器分为元素选择器、id选择器、类选择器、属性选择器、伪类和伪元素选择器。这些选择器具有不同的优先级（id选择器>类和伪类选择器>元素和伪元素选择器）并可按照一定的组合顺序形成更复杂选择器，而声明语句则由属性和值构成的键值对组成。

2. 什么是BFC？形成BFC的条件是什么？BFC有什么作用？

BFC(block formating context)是块级格式上下文，属于格式上下文的一种（另一种是IFC(inline formating context)）。格式上下文是页面中的一块渲染区域，对应一套渲染规则，决定了子元素如何定位以及和其它子元素的相互作用。BFC和IFC的区别是相应规则不同，BFC的布局规则如下：

1.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此；
2.内部的盒子会在垂直方向依次放置；
3.盒子垂直方向的距离由margin决定， **属于同一个BFC的两个相邻Box的上下margin会发生重叠**；
4.对于从左到右的布局，每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此；
5.BFC的区域不会与float重叠；
6.计算BFC的高度时，浮动元素也参与计算。 

IFC的布局规则要简单一些：
1.内部的盒子会在水平方向依次放置；
2.IFC的高度，由里面最高盒子的高度决定；
3.当一行不够放置的时候会自动切换到下一行；

形成BFC的条件有以下几个：
1.根元素;
2.浮动元素（float属性非none）;
3.overflow属性非visible的块级元素;
4.绝对定位元素(position属性为absolute或fixed);
5.display属性为inline-block,table-ceil,table-captioin,flex,inline-flex,grid,inline-grid等

根据BFC的规则，可以将BFC应用到下面3个方面：
1.根据“属于同一个BFC的相邻Box会发生margin折叠”可以避免margin折叠
2.根据“BFC区域不会与float区域重叠”可以避免被浮动元素遮挡
3.根据“计算BFC高度时浮动元素也参与计算”可以清除浮动

参考[BFC与IFC概念理解+布局规则+形成方法+用处](https://segmentfault.com/a/1190000009545742)

3. 列举几种常用的水平垂直居中方案

1.外容器flex布局并设置justify-content和align-items属性
2.外容器table-ceil布局并设置text-align和veritcal-align属性，内容器设置display属性为inline-block
3.外容器grid布局，内容器设置margin属性为auto
4.外容器相对定位，内容器绝对定位并使用2D平移或者使用margin:auto+四方距离为0

4. 列举几种三栏布局实现方案

1.左右栏浮动+中间栏设置BFC
2.外容器弹性布局+左右栏固定宽+中间栏flex:1
3.外容器grid布局并设置grid-template-columns:xxpx 1fr xxpx+左右栏固定宽
4.双飞翼布局

参考[CSS三栏布局几种常用方案](https://blog.csdn.net/Blateyang/article/details/109148239)

5. 如何清除浮动

1.设置overflow属性
2.设置clearfix:after样式（clear:both;content:"";display:block)

6. flex布局的设计思路和实现原理是怎样的？它解决了哪些问题？

flex的设计思路是根据外容器的尺寸调整内部元素的尺寸达到充满整个容器的效果，flex布局容器内的flex项会沿着父容器flex-direction属性指定的主轴排列，沿着与主轴垂直的交叉轴进行布局调整。实现原理分3步：
1.分行（指定了flex-wrap属性为超出换行）
2.计算主轴各flex项的位置和宽度（在flex-basis的基础上根据各flex项的缩放比例调整）
3.计算交叉轴各flex项的位置和高度

它解决了传统CSS难以解决的三大问题：
1.水平垂直居中：父容器flex布局并设置主轴对齐方式justify-content为center,交叉轴对齐方式align-items也为center
2.两列等高：父容器flex布局且交叉轴对齐方式align-items为stretch
3.宽度自适应：父容器flex布局+左右栏固定宽+中间栏flex:1

关于flex布局API的介绍可以参考[MDN-flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#%E7%A4%BA%E4%BE%8B)以及[阮一峰的博客：Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

7. CSS有几种盒模型？它们之间有何区别？

有两种盒模型：标准模型和IE模型，二者的区别主要在于盒子的宽高如何表现。标准模型设置的宽高是针对内容区的，而IE模型的设置的宽高是针对内容区+内边距+边框。现代浏览器盒模型默认使用标准模型，可通过CSS的box-sizing属性改变使用的盒模型。

本题和下一题摘自[CSDN博客-【面经系列】CSS面经](https://blog.csdn.net/weixin_41030302/article/details/104515795)

8. 如何解决高度塌陷问题？

高度塌陷分两种，一种是浮动元素脱离正常文档流引起的高度塌陷，还有一种是position属性为absolute或fixed引起的高度塌陷。前者可通过清除浮动解决，后者可通过直接给父元素设定高度解决。

9. CSS动画的理解和相关API的区别？

CSS动画允许在多个关键帧之间进行状态（元素的行为和外观）的改变。它主要涉及transiton和animation两个API。

transition用于指定从一种转态到另一种状态的样式过渡规则，关注的是样式属性，有四个配置属性transition-property,transition-duration,transition-timing-function和transition-delay

animation用于在不同关键帧上设置多个过渡点，关注的更多是元素整体的状态，简单理解的话一个animation可以由多个transition组成，因此animation可以对动画进行更加精确灵活的控制。animation有8个配置属性，除了与transition类似的duration,timing-function,delay还有animation-direction,animation-iteration-count,animation-name（由@keyframe定义的关键帧名），animation-fill-mode（指定动画播放前后应用的样式)和animation-play-state

详细用法可参考[CSS3（二） Transition & Animation](https://blog.csdn.net/u013243347/article/details/79943045)
