(function(arg) {function foo(str) {var tmp=str; console.log(arg); return tmp}; console.log(foo(arg))})({attr: "foo_tmp"}) 
// function foo1() {
//   var v1 = "v1"
//   function foo2() {
//     var v2 = "v2"
//     console.log(v1 + "," + v2)
//   }
//   return v2
// }
// foo1()()