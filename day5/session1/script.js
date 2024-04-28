// let arr=[1,2,3,4,5]

// arr.forEach((element,index) => {
//     console.log(index,element)
//     let p=document.createElement('p');
//     p.innerHTML=`<span style="font-weight:bolder;font-size:24px">${element}</span>`;
//     let body=document.querySelector('body');
//     body.appendChild(p)
// });

// console.log("GEC strat")

// setTimeout(()=>{
//     console.log('hello');
//     let c=5*2;
//     console.log(c)
//     alert("hello");
// },10000);

// console.log("GEC end")

// let p = new Promise((resolve,reject)=>{
//     console.log("Succes");
//     resolve('done');
//     // reject('error occured due to failure');
// }) 
// p.then((res)=>{
//     console.log(res)
// })


console.log('start')
const req=fetch("https://api.github.com/users/deepak3440")
// const res=req.then(res=>res.json());
const res=req.then(res=>{
    console.log(res);
    return res.json();
})
res.then((data)=>{
    console.log(data)
})
console.log('end')