## 1 学习目的
1. 对付面试
2. 加深对Promise的理解，更好地使用它

## 2 Promise介绍和使用
### 2.1 Promise介绍
Promise（中文翻译为期约）是js中替代传统的“事件+回调函数”的异步编程解决方案，它相当于一个容器，里面包含了未来将要结束的事件的结果。它具有3种转态，PENDING,FULFILLED和REJECTED，分别代表执行中，已成功和已失败。它还具有两大特点：1. 容器状态不受外界影响 2. 期约的状态一旦改变，便不会再变，且此后任何时刻都能获得该结果。
### 2.2 Promise用法
```javascript
new Promise((resolve, reject) => {
  // 包含异步任务的业务逻辑
}).then(
  res => {
    // resolve对应触发函数的执行
  },
  err => {
    // reject对应触发函数的执行
  }
).then(
  // 可链式执行
  res => {

  }
).catch(
  err => console.log(err)
)

Promise.resolve()
Promise.reject()
Promise.all([promise1, promise2, ...]).then()
Promise.race([promise1, promise2, ...]).then()
```

## 3 Prmoise整体框架
```javascript
class Promise() {
  constructor(executor) {
    const resolve = () => {

    }
    const reject = () => {

    }
    executor(resolve, reject)
  }

  then() {

  }

  catch() {

  }

  static resolve() {

  }

  static reject() {

  }

  static all() {

  }

  static race() {

  }
}
```

## 4 Promise简化版
```javascript
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"
class Promise {
  constructor(executor) {
    this.status = PENDING
    const resolve = (value) => {
      if(this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
      }
    }
    const reject = (reason) => {
      if(this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
      }
    }

    try {
      executor(resolve, reject)
    }catch(e){
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    setTimeout(()=>{ // then是微任务，用setTimeout模拟
      if(this.status === FULFILLED) {
        onFulfilled(this.value)
      }else if(this.status === REJECTED) {
        onRejected(this.reason)
      }
    })
  }
}

const promise = new Promise((resolve, reject)=> {
  setTimeout(()=>{Math.random()>0.5 ? resolve(1):reject(-1)}, 100)
}).then(
  res => console.log(res),
  err => console.log(err)
)
```
需完善的三个方向
1. Promise内部异步代码执行问题
简化版中Promise内部executor里面的异步代码因为会异步执行完成后才resolve或reject,而then中的微任务可能会先执行导致因status状态还是PENDING而错过了执行回调，通过增加成功态和失败态函数任务队列可以解决该问题
```javascript
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"
class Promise {
  constructor(executor) {
    this.status = PENDING
    // 新增成功态和失败态函数队列
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = (value) => {
      if(this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        // 执行成功态函数
        this.onFulfilledCallbacks.forEach(fn => fn(this.value))
      }
    }
    const reject = (reason) => {
      if(this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 执行失败态函数
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }

    try {
      executor(resolve, reject)
    }catch(e){
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    setTimeout(()=>{ // then是微任务，用setTimeout模拟
      if(this.status === FULFILLED) {
        onFulfilled(this.value)
      }else if(this.status === REJECTED) {
        onRejected(this.reason)
      }else{
        // 还处在PENDING状态，将回调函数添加到任务队列中,留待期约被解决之后执行
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
      }
    })
  }
}
```
2. Promise链式调用
关键在于Promise.then()也可以返回一个Promise，首先需要将现有的this代表的Promise对象保存，然后返回一个新的Promise。在新Promise的执行器中，根据
then的两个回调函数是否也返回Promise做不同处理
```javascript
  then(onFulfilled, onRejected) {
    const self = this // 保存现有的Promise对象
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{ // then是微任务，用setTimeout模拟
        if(self.status === FULFILLED) {
          setTimeout(()=>{
            try{
              const result =  onFulfilled(self.value)
              // 如果result也是Promise，新返回的Promise等待result落定，否则直接返回解决值
              return result instanceof Prmoise ? result.then(resolve, reject) : resolve(result)
            }catch(e) {
              reject(e)
            }
          })
        }else if(this.status === REJECTED) {
          setTimeout(()=>{
            try{
              const result =  onRejected(self.reason)
              // 这里和上面一样个人认为是拒绝回调执行成功新的Promise就算解决
              return result instanceof Prmoise ? result.then(resolve, reject) : resolve(result)
            }catch(e) {
              reject(e)
            }
          })
        }else{
          // 还处在PENDING状态，将回调函数添加到任务队列中
          self.onFulfilledCallbacks.push(()=>{
            setTimeout(()=>{
              try{
                const result =  onFulfilled(self.value)
                // 如果result也是Promise，新返回的Promise等待result解决，否则直接返回解决值
                return result instanceof Prmoise ? result.then(resolve, reject) : resolve(result)
              }catch(e) {
                reject(e)
              }
            })
          })
          this.onRejectedCallbacks.push(()=>{
            setTimeout(()=>{
              try{
                const result =  onRejected(self.reason)
                return result instanceof Prmoise ? result.then(resolve, reject) : resolve(result)
              }catch(e) {
                reject(e)
              }
            })            
          })
        }
      })
    })
  }
```
3. 值穿透问题
值穿透是指then期望接受函数参数，如果传入的不是函数，而是直接值，该值会穿透then，then相当于无效
在then的开头添加下面2句
```javascript
onFulfilled = (typeof onFulfilled === "Function") ? onFulfilled : value=>value
onRejected = (typeof onRejected === "Function") ? onRejected : (reason) => {
  return throw new Error((reason instanceof Error) ? reason.message : reason)
}
```

## 5 catch，Promise.resolve,Promise.reject的实现
1. catch其实就是Promise.then(null, onRejected)的封装
`catch(onRejected) {return this.then(null, onRejected)}`
2. Promise.resolve返回Promise实例
resolve的参数有三种情况，Promise实例，不是Promise实例，thenable对象（暂不考虑）
```javascript
static resolve(value) {
  if(value instanceof Promise) {
    return value
  }else{
    return new Promise((resolve, reject) => resolve(value))
  }
}
```
3. Promise.reject也返回Promise实例
```javascript
static reject(reason) {
  return new Promise((resolve, reject) => reject(reason))
}
```

## 6 Promise.all()和Promise.race()的实现
1. Promise.all()

Promise.all()接受一个可迭代对象并返回一个Promise对象，当可迭代对象中的所有成员都落定（解决或拒绝）之后返回的Promise才解决（大家都落定才算解决），注意可迭代对象成员不一定都是Promise，需要用resolve包装
```javascript
static all(promiseArr) {
  const len = promiseArr.length
  const values = new Array(len)
  let count = 0 
  return new Promise((resolve, reject) =>{
    for(let i=0; i<promiseArr.length; i++>) {
      Promise.resolve(promiseArr[i]).then(
        val => {
          values[i] = val
          count++
          if(count === len) resolve(values) // resolve所有落定的val组成的数组
        },
        err => {
          reject(err) // reject第一个落定的err
        }
      )
    }
  })
}
```

2. Promise.race()
Prmoise.race()也是接受一个可迭代对象并返回一个Promise对象，与all()不同的是该对象取决于第一个落定（解决或拒绝）的可迭代对象成员(谁先落定谁胜出)
```javascript
static race(promiseArr) {
  return new Prmoise((resolve, reject)=>{
    promiseArr.forEach(p => {
      Prmoise.resolve(p).then(
        val => resolve(val), // resolve第一个落定的val 
        err => reject(err) // reject第一个落定的err
      )
    })
  })
}
```