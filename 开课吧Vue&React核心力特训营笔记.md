## Day1 Vue和React设计思路对比
### 1.1 Vue options=>composition
#### 1. Vue2的options API优缺点
- 优点：方便扩展
- 缺点：代码冗长（上下反复横跳），复用度低（虽然mixin可解决，但容易引起命名冲突）

#### 2. Vue3的composition API优缺点
- 缺点：难看
- 优点：
  - tree-shaking：没有用到computed的话，代码build时就会从vue3中删掉computed的代码
  - 方便组合： 组件可以任意拆分并将逻辑关注点相关的代码组合在一起使用（命名冲突的话可通过在引入时重命名解决），没有options的上下反复横跳的问题，composition的逻辑都是变量和函数，组合优于继承
  - 渐进式更新：ref api

#### 3. Vue的设计思路
响应式+vdom
  - 响应式：数据变了通知你（主动通知）
  - vdom：数据变了你不知道，需要做一次diff比对才知道哪些数据变了（被动计算）

### 1.2 React15的class=>React16的hooks API
hooks（维护组件状态和行为的全局对象）的使用方式和Vue3的composition类似，但底层实现有区别：
- hooks中的函数每次render时都会执行，useState()有严格的顺序限制；
- composition API的composition在初始render时会执行一次，后续执行靠的是响应式通知

### 1.3 JSX与template的对比
1. JSX优缺点
  - 优点：纯JS，非常灵活，像自己买菜做饭
  - 缺点：上手难度更大，动态程度高导致编译器优化的空间更小

2. template优缺点
  - 优点：易上手，静态程度高导致编译器优化的空间更大
  - 缺点：不够灵活，有一定的语法限制，像买半成品做菜

### 1.4 Vue和React虚拟dom的对比
1. 虚拟DOM是什么：内存中的dom副本
2. 虚拟dom存在的意义：避免操作实体dom
3. 虚拟dom在Vue2和React16中的区别
  - vue2既有响应式主动通知，也有被动计算的虚拟dom。根据组件划分，组件之间用响应式通知，组件内部通过vdom计算diff（使用的是snabbdom的双端预判）
  - react的vdom引入了fiber技术（时间切片），将vdom树转变成链表结构，在做diff时如果有更高优先级的任务来了会切换过去执行，等空闲了再回来继续做diff

编译器学习：github搜the-super-tiny-compilier

### 1.5 小结:设计思想的维度
Vue: Compiler Mutable Template 抽象
React: Runtime Immutable JSX   原生JS

## Day2 Vue和React全家桶比较
### 2.1 Vue和React全家桶比较
- 数据流： vuex redux
- 路由： vue-router react-router
- 组件库：element3 ant-design
- SSR: nuxt next
- 脚手架：vue-cli umi
- 跨端：uni-app taro
- 文档：vuepress dumi

### 2.2 Vue源码解读
Tips: 
1. 先会使用框架
2. 再针对关键原理结合自己的理解实现一个mini简化版
3. 看源码时可以先将非相关的函数折叠起来，降低难度，更容易看进去

前端经验不足，得不到面试机会怎么办？
很可能是缺乏亮点，需要打好基础，打造亮点

一道很考验基础的JS面试题：统计当前网页中出现次数最多的三个标签

### 2.3 大厂素质要求
1. 大厂思维： 数据结构和算法、测试自动化、etc
2. 广度：小程序、Webpack工程化、etc
3. 深度：Vue全家桶、Webpack原理、etc
4. 实战：Vue全家桶企业级实战、Nodejs项目实战、etc

### 2.4 下一代webpack：vite
相比webpack的一个优势，用npm run build编译打包更快

## Day3 前端中的算法
### 3.1 前端框架中的算法
- 最基础的数据结构： 数组和链表
- 前端最重要的数据结构：树
- 其它： 栈、堆等
- 算法思想
  - 递归：自己玩自己
  - 回溯：有后悔药
  - 贪心：眼前利益、不能后悔
  - 动态规划：奇异博士的平行宇宙，找到最优解
  - 二分：分而治之

### 3.2 暖场算法题
- Leetcode20 判断有效括号（栈）——可应用在前端html标签是否正确匹配的问题中
- Leetcode104 二叉树的最大深度（树）——递归
- Leetcode141 环型链表（链表）——快慢指针会在环中相遇

### 3.3 Vue中用到的算法
1. Vue2：双端比较判断
2. Vue3: 引入最长递增子序列，找到不需要移动的所有元素
最长递增子序列的解法：
- 动态规划：dp[i] = max(dp[i], dp[j]+1), j<i
- 贪心+二分：vue采用的算法（leetcode300）
3. KeepAlive等缓存场景：使用LRU Cache

### 3.4 算法学习
1. 先看简单带图的
2. 再看教材，体系化知识（算法 第四版）
3. 刷题

### 3.5 其它知识
1. 网络协议
2. 编译原理：相对容易看懂的《编程语言实现模式》、github搜the-super-tiny-compilier
3. 框架中的规范：代码规范、git规范、测试规范

### 3.6 什么项目算是企业级项目
用文件上传举例：将文件上传功能做到极致
- 青铜：axios.post
- 白银：体验优化，粘贴、拖拽、进度条
- 黄金：断点续传、类型判断
- 铂金：web-worker, 时间切片， 抽样Hash
- 钻石：异步任务并发数，切片报错重试
- 星耀：慢启动控制，碎片清理

### 3.7 如何argue薪资
两本书 《优势谈判》

### 3.8 简历
- 不要写经历，要写经验

### 3.9 学习方法
1. 看读-》实践-》教授他人
2. 《面试学习法》：每隔半年就出去面试一次，不图拿offer，只是找知识薄弱点和向面试官学习寻求建议
3. 《羊腿学习法》：请崇拜的大咖吃饭获得面对面交流学习的机会
4. 没有动力？多看看自己的薪资、对比同行和优秀的人找差距