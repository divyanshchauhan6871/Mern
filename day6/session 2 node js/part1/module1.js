sum = (a, b) => {
    console.log(a + b);
}
// sum(5,6)
multiply = (a, b) => {
    console.log(a * b);
}
// at this moment we are using require in the other file therefore this file will also run before script.js file
multiply(10, 10)
const name = 'Divyansh'


module.exports = {
    sum: sum,
    multiply: multiply,
    name: name
};


// module.exports = {
//     sum,
//     multiply,
//     name
// };
// the above two method of exporting the functions works exactly same