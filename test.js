function test() {
  var a = 1000000000
  var b = {}
  var c = {a: a}
  console.log(process.memoryUsage())
  return c
}

var res = test()
console.log(process.memoryUsage())
console.log(res)

// 手写Promise
// 1 基本框架:三大问题（executor内部可能异步执行，then的链式调用，值穿透问题）
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
class Promise {
  constructor(executor) {
    this.status = PENDING
    this.onFulfilledList = []
    this.onRejectedList = []
    const resolve = (value) => {
      if(this.status == PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulfilledList.forEach(fn => {fn(value)})
      }
    } 
    const reject = (reason) => {
      if(this.status == PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedList.forEach(fn => {fn(value)})
      } 
    }
    try{
      executor(resolve, reject)
    }catch(e){
      reject(e)
    }
  } 

  then(onFulfilled, onRejected) {
    onFulfilled = (typeof onFulfilled === "function") ? onFulfilled : value => value 
    onRejected = (typeof onRejected === "function") ? onRejected : reason => {
      throw new Error((reason instanceof Error) ? reason.message : reason)
    }
    const that = this 
    return new Promise((resolve, reject) => {
      if(this.status == FULFILLED) {
        setTimeout(() => {
          try{
              let result = onFulfilled(that.value)
              return result instanceof Promise ? result.then(resolve, reject) : resolve(result)
          }catch(e) {
            reject(e)
          }
        })
      }else if(this.status == REJECTED) {
        setTimeout(() => {
          try{
              let result = onRejected(that.value)
              return result instanceof Promise ? result.then(resolve, reject) : resolve(result)
          }catch(e) {
            reject(e)
          }
        })
      }else {
        this.onFulfilledList.push(()=>{
          setTimeout(() => {
            try{
                let result = onFulfilled(that.value)
                return result instanceof Promise ? result.then(resolve, reject) : resolve(result)
            }catch(e) {
              reject(e)
            }
          })
        })
        this.onRejectedList.push(()=>{
          setTimeout(() => {
            try{
                let result = onRejected(that.value)
                return result instanceof Promise ? result.then(resolve, reject) : resolve(result)
            }catch(e) {
              reject(e)
            }
          })
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static resolve(value) {
    if(value && value instanceof Promise) {
      return value
    }else{
      return new Promise((resolve, reject)=>{resolve(value)})
    }
  }
}