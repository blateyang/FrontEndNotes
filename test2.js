
import {foo} from './test3.js';
console.log(foo); //bar
setTimeout(() => console.log(foo), 500); //baz
