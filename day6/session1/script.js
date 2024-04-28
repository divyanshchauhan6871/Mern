// console.log("start");

// let p = 5;
// setTimeout(()=>{
//     console.log("timouet");
// },0);
// setTimeout(()=>{
//     console.log("timouet1");
// },2000);
// setTimeout(()=>{
//     console.log(p)
//     console.log("timouet2");
// },3000);
// setTimeout(()=>{
//     console.log("timouet3");
// },2000);

// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");




// function createOrder(x, fn) {
//     console.log(x);
//     fn("div");
// }

// function makePayment(x) {
//     console.log(x)
// }
// createOrder("pencil", makePayment)
// let id = "123"
// let pr = new Promise((resolve, reject) => {
//     // if (id === "134")
//     if (0) {
//         setTimeout(() => {
//             resolve('succes')
//         }, 2000);
//     }
//     else {
//         setTimeout(() => {
//             reject('order not placed')
//         }, 2000);
//         // reject("order not placed")
//     }
// })
// pr.then((res) => {
//     console.log(res);
// }).catch((res) => {
//     console.log(res)
// })
// console.log(pr)



// if we handle
// pr.catch=((err)=>{
// console.log(err);
// })
// seperately with pr.then before then it will give an red line error given
// therefore it is supposed to use .then and ,catch without using the promise differntly but simaltaneously as shown above

// 10 ':' 34 ':' 33

// setInterval(() => {
//     let date=new Date;
//     let sec=date.getSeconds();
//     let min=date.getMinutes();
//     let hrs=date.getHours();
//     console.log(hrs,':',min,':',sec)
//     let root=document.querySelector('#root');
//     let str=`${hrs}:${min}:${sec}`
//     root.innerHTML=str
// }, 1000);




setTimeout(function abc(){
    console.log("I am one")
},200);

const pr= new Promise((res,rej)=>{
    setTimeout(()=>{
        res('done')
    },250)
})


setTimeout(function xyz(){
    console.log("i am 2");
},200)


pr.then((res)=>{
    console.log(res)
})