// import { name } from './module1'
import { sum, multiply, name } from './module1'
sum(3,5)
multiply(3,5)
console.log(name)

// here we need to keep in mind that we need to keep the names same as what we actually want to import

// const {sum, multiply} = require('./module1')
// // import { sum, multiply } from './module1';
// sum(3,5);
// multiply(3,5);