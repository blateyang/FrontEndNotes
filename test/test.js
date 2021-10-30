const process = require("process")
let oldConsole = global.console
let newConsole = Object.create(null)
// process.env.NODE_ENV = "development"

;["log"].forEach((method)=>{
  newConsole[method] = function(...args){
    if(process.env.NODE_ENV !== "development") {
      return
    }
    return oldConsole[method](...args)
  }
})

global.console = newConsole

global.console.log("ygj")