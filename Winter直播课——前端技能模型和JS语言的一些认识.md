# 前端技能模型

## 1. 基础能力
- 编程能力，架构能力，工程能力
- 前端知识
- 领域知识

## 2. 学习方法
1. 整理法
- 顺序关系：编译（词法分析、语法分析、代码优化、代码生成）
- 组合关系：CSS规则（选择器、属性、值）
- 维度关系：JS（词法、语义、运行时）
- 分类关系：CSS简单选择器（id选择器、类选择器、元素选择器、伪类选择器、伪元素选择器、属性选择器、...)

2. 追溯法（重要的不是结论本身，而是追溯过程中的经历和体悟）
- 追溯早期文献资料
- 查看标准：whatwg、MDN
- 大师：JS之父Brandn Eich

3. 利用代码爬取整理相关资料——获取CSS3各属性相应标准的代码
```javascript
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
iframe.src = "https://www.w3.org/TR/css-lists-3/";
function happen(element, type){  
  return new Promise(resolve => {    
    element.addEventListener(type, resolve, {once: true})  
  })
}
happen(iframe, "load").then(function(){
      console.log(document.querySelectorAll("#container li[data-tag~=css] h2:not(.Retired):not(.GroupNote)"));
})

async function start() {
var output = []
for(let standard of  Array.prototype.slice.call(document.querySelectorAll("#container li[data-tag~=css] h2:not(.Retired):not(.GroupNote)")){    
  console.log(standard.children[0].href);    
  iframe.src = standard.children[0].href;    
  await happen(iframe, "load");    
  var properties = Array.prototype.map.call(iframe.contentWindow.document.querySelectorAll(".propdef [data-dfn-type=property]"), e => e.childNodes[0].textContent);    
  if(properties.length)        
    output.push(standard.children[0].textContent + " | " + properties.join(", ")); 
  }  
  console.log(output.join("\n"))
}

start();
```

# JS语言的一些认识
## 0 语言的产生和分类
### 0.1 乔姆斯基谱系
- 0型 无限制文法：?::=? （人类语言符合的范式，如英文，中文）
- 1型 上下文相关文法： ? \<A\> ?' ::= ? \<B\> ?'
- 2型 上下文无关: \<A\> ::= ? (大多数编程语言符号的范式)
- 3型 正则文法：\<A\> ::= \<A\>?

## 1 符号和产生式
### 1.1 符号（Symbol)
- 终结符Terminal Symbol：符号的基本元素
- 非终结符NonTerminal Symbol: 可由终结符构成
### 1.2 产生式
产生语言的书写规则，包括BNF(巴克斯-诺尔范式)和EBNF，下面以中文举例
- BNF写法

  <中文> ::= <句子> | <中文> <句子>

  <句子> ::= <主语> <谓语> <宾语> | <主语> <谓语>

  <主语> ::= <名词> | <代词> | <名词性短语>

  <代词> ::= '你' | '我' | '他'
- EBNF写法

  中文 ::= {句子} // {}表示可重复

  句子 ::= 主语 谓语 [宾语] // []表示可选

  主语 ::= 名词 | 代词 | 名词性短语

  代词 ::= '你' | '我' | '他'

另一个例子：十进制数的四则运算
  四则运算 ::= 加法算式

  加法算式 ::= (加法算式 ('+'|'-') 乘法算式) | 乘法算式

  乘法算式 ::= (乘法算式 ('*'|'/') 十进制小数) | 十进制小数

  十进制小数 ::= ['-'] 十进制整数 '.' [{'0'}]十进制整数 | 十进制整数

  十进制整数 ::= '0' | {'1'|'2'|'3'|'4'|'5|'6'|'7'|'8'|'9'} [{'0'|'1'|'2'|'3'|'4'|'5|'6'|'7'|'8'|'9'}]
## 2 如何定义一门编程语言
### 2.1 基本单位
- Literal 直接量/字面量
  - 字符串
  - 数字
  - 布尔值
- Identifier 标识符
  - 函数名
  - 变量名
- 表达式
  - 四则运算
- 语句
  - 顺序
  - 分支
  - 循环
- 区块
  - 函数
  - 类
- 模块
  - 包/模块/程序

# 计算机基础知识对前端工程师的作用
## 性能优化与计算机网络
1. 会话/表示/应用层：HTTP,DNS
2. 连接层：HTTP2 TCP窗口
3. 物理层：连接保持（重新建连接会很耗时）

## 数据埋点和曝光埋点
1. 数据埋点是用来做数据统计的，类似利用传感器采集数据
2. 曝光埋点：统计在滚动时停留在视口区域的数据信息
案例：传统方案遍历所有节点去判断是否在视口区域，应用哈希思想将视口区域的节点划分成多个图块，仅需遍历这些图块对应的节点，性能得到很大提升