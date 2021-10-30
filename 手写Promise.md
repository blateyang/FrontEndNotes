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
  // 可链式执行，then通常只传一个参数，和catch搭配使用
  res => {

  }
).catch(
  err => console.log(err)
)

Promise.resolve()
Promise.reject()
Promise.all([promise1, promise2, ...]).then() // 所有期约解决后Promise.all()才解决，否则Promise.all()返回第一个被拒绝的期约
Promise.race([promise1, promise2, ...]).then() // 返回最先被解决或拒绝的期约
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
  }
```
3. 值穿透问题
值穿透是指then期望接受函数参数，如果传入的不是函数，而是直接值，该值会穿透then，then相当于无效
在then的开头添加下面2句
```javascript
onFulfilled = (typeof onFulfilled === "Function") ? onFulfilled : value=>value
onRejected = (typeof onRejected === "Function") ? onRejected : (reason) => { throw reason }
```

## 5 catch，Promise.resolve,Promise.reject的实现
1. catch其实就是Promise.then(null, onRejected)的封装
```js
catch(onRejected) {
  return this.then(null, onRejected)
}
```
2. Promise.resolve返回Promise实例
resolve的参数有三种情况，Promise实例，不是Promise实例，thenable对象（暂不考虑）
```javascript
static resolve(value) {
  if(value && value instanceof Promise) {
    return value
  }else{
    return new Promise((resolve, reject) => resolve(value))
  }
}
```
3. Promise.reject也返回Promise实例，但它的参数会直接传给reject
```javascript
static reject(reason) {
  return new Promise((resolve, reject) => reject(reason))
}
```
关于Promise实现解读还可以参考https://juejin.cn/post/6945319439772434469#heading-26，要更完整规范
## 6 Promise.all()和Promise.race()的实现
1. Promise.all()

Promise.all()接受一个可迭代对象并返回一个Promise对象，当可迭代对象中的所有成员都解决（状态变为fulfilled）之后返回的Promise才解决（大家都解决才算解决），注意可迭代对象成员不一定都是Promise，需要用resolve包装
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
          if(count === len) resolve(values) // resolve所有解决的val组成的数组
        },
        err => {
          reject(err) // reject第一个被拒绝的err
        }
      )
    }
  })
}
```

2. Promise.race()
Prmoise.race()也是接受一个可迭代对象并返回一个Promise对象，与all()不同的是该对象取决于第一个被落定（状态改变）的可迭代对象成员(谁先改变状态谁胜出)
```javascript
static race(promiseArr) {
  return new Prmoise((resolve, reject)=>{
    promiseArr.forEach(p => {
      Prmoise.resolve(p).then(
        val => resolve(val), // resolve第一个解决的val 
        err => reject(err) // reject第一个拒绝的err
      )
    })
  })
}
```

参考[详细的Promise源码实现，再被面试问到轻松解答](https://juejin.cn/post/6860037916622913550）

const PENDING = 'PENDING';      // 进行中
const FULFILLED = 'FULFILLED';  // 已成功
const REJECTED = 'REJECTED';    // 已失败

class Promise {
  constructor(exector) {
    // 初始化状态
    this.status = PENDING;
    // 将成功、失败结果放在this上，便于then、catch访问
    this.value = undefined;
    this.reason = undefined;
    // 成功态回调函数队列
    this.onFulfilledCallbacks = [];
    // 失败态回调函数队列
    this.onRejectedCallbacks = [];

    const resolve = value => {
      // 只有进行中状态才能更改状态
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 成功态函数依次执行
        this.onFulfilledCallbacks.forEach(fn => fn(this.value));
      }
    }
    const reject = reason => {
      // 只有进行中状态才能更改状态
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 失败态函数依次执行
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      // 立即执行executor
      // 把内部的resolve和reject传入executor，用户可调用resolve和reject
      exector(resolve, reject);
    } catch(e) {
      // executor执行出错，将错误内容reject抛出去
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    // 值穿透
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function'? onRejected : reason => { throw reason }
    // 保存this
    const self = this;
    return new Promise((resolve, reject) => {
      if (self.status === FULFILLED) {
        try {
          setTimeout(() => {
            const result = onFulfilled(self.value);
            result instanceof Promise ? result.then(resolve, reject) : resolve(result);
          });
        } catch(e) {
          reject(e);
        }
      } else if (self.status === REJECTED) {
        try {
          setTimeout(() => {
            const result = onRejected(self.reason);
            result instanceof Promise ? result.then(resolve, reject) : resolve(result);
          })
        } catch(e) {
          reject(e);
        }
      } else if (self.status === PENDING) {
        self.onFulfilledCallbacks.push(() => {
          // try捕获错误
          try {
            // 模拟微任务
            setTimeout(() => {
              const result = onFulfilled(self.value);
              // 分两种情况：
              // 1. 回调函数返回值是Promise，执行then操作
              // 2. 如果不是Promise，调用新Promise的resolve函数
              result instanceof Promise ? result.then(resolve, reject) : resolve(result);
            })
          } catch(e) {
            reject(e);
          }
        });
        self.onRejectedCallbacks.push(() => {
          // 以下同理
          try {
            setTimeout(() => {
              const result = onRejected(self.reason);
              // 不同点：此时是reject
              result instanceof Promise ? result.then(resolve, reject) : resolve(result);
            })
          } catch(e) {
            reject(e);
          }
        })
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  static resolve(value) {
    if (value instanceof Promise) {
      // 如果是Promise实例，直接返回
      return value;
    } else {
      // 如果不是Promise实例，返回一个新的Promise对象，状态为FULFILLED
      return new Promise((resolve, reject) => resolve(value));
    }
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    })
  }
  static all(promiseArr) {
    const len = promiseArr.length;
    const values = new Array(len);
    // 记录已经成功执行的promise个数
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        // Promise.resolve()处理，确保每一个都是promise实例
        Promise.resolve(promiseArr[i]).then(
          val => {
            values[i] = val;
            count++;
            // 如果全部执行完，返回promise的状态就可以改变了
            if (count === len) resolve(values);
          },
          err => reject(err),
        );
      }
    })
  }
  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      promiseArr.forEach(p => {
        Promise.resolve(p).then(
          val => resolve(val),
          err => reject(err),
        )
      })
    })
  }
}

作者：洛霞
链接：https://juejin.cn/post/6860037916622913550
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


手写Promise练习（先搭架子实现核心的constructor和then）
```js
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
class MyPromise {
  constructor(executor) {
    // 初始化状态
    this.state = PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if(this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(callback=>{callback(value)})
      }
    }

    const reject = (reason) => {
      if(this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(callback=>{callback(reason)})
      }
    }

    try{
      executor(resolve, reject)
    }catch(reason) {
      reject(reason)
    }
  }

  then(onFulfilled, onRejected) {
    // 值穿透
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled: value=>value
    onRejected = typeof onRejected === "function" ? onRejected: reason=> {throw reason}
    // 链式调用
    let self = this
    return new MyPromise((resolve, reject)=>{
      if(this.state === FULFILLED) {
        // 利用setTimeout模拟微任务
        try{
          setTimeout(()=>{
            let result = onFulfilled(self.value)
            result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
          },0)
        }catch(reason) {
          reject(reason)
        }
      }else if(this.state === REJECTED) {
        try{
          setTimeout(()=>{
            let reason = onRejected(self.reason)
            reason instanceof MyPromise ? reason.then(resolve, reject) : resolve(reason)
          },0)
        }catch(reason) {
          reject(reason)
        }
      }else{// PENDING
        // 将任务追加到成功态和失败态函数队列中
        this.onFulfilledCallbacks.push(()=>{
          try{
            setTimeout(()=>{
              let result = onFulfilled(self.value)
              result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
            },0)
          }catch(reason) {
            reject(reason)
          }
        })
        this.onRejectedCallbacks.push(()=>{
          try{
            setTimeout(()=>{
              let reason = onRejected(self.reason)
              reason instanceof MyPromise ? reason.then(resolve, reject) : resolve(reason)
            },0)
          }catch(reason) {
            reject(reason)
          }          
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static resolve(value) {
    if(value instanceof MyPromise) {
      return value
    }else{
      return new MyPromise((resolve, reject)=>resolve(value))
    }
  }

  static reject(reason) {
    return new MyPromise((resolve, reject)=>reject(reason))
  }
}

// test case
new MyPromise((resolve, reject)=>{
  console.log("enter executor")
  resolve(1)
}).then().then(value=>2*value)

new MyPromise((resolve, reject)=>{
  console.log("enter executor")
  reject(1)
}).catch(reason=>console.log(reason))
```
