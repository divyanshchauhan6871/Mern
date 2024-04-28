
// console.log('hello world')

let arr = {
    "name": "DIvyansh",
    "lastname": "Chauhan"
}
checkifobj = (ob) => {

    if (typeof (ob) == "object")
        console.log("yes")

    if (typeof (ob) == "object")
        console.log("yes")
    // return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}
// let ans=checkifobj(arr)
checkifobj(arr)
// console.log(ans)


console.log(window);
console.log(document);
console.log(window.document);

console.dir(window)
console.dir(window.document)
const res = document.getElementsByTagName('h2')[2].innerHTML
console.log(res)


const head = document.getElementById('head1')
console.log(head)
head.style.backgroundColor='yellow'

// console.log(document.querySelectorAll('bg'))
console.log(document.querySelectorAll('h2'))
console.log(document.querySelectorAll('h2.bg'))
console.log(document.querySelectorAll('div h2'))
console.log(document.querySelectorAll('div>h2'))

chacge=()=>{
    if(head.style.backgroundColor=='yellow'){
    head.style.backgroundColor='blue';
    document.body.style.backgroundColor='blue'
    document.body.style.color='black'
}
else
head.style.backgroundColor='yellow'
document.body.style.backgroundColor='red'
}