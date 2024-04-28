// const figlet = require("figlet");
// import figlet from "figlet";

// figlet("My name is Divyansh Chauhan", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

// const URL="https://dummyjson.com/prodts";
const URL = "https://dummyjson.com/products";
// fetch(URL)
// .then((res)=>{
//     console.log(res);
//     return res.json
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("Error occured");
// })

// (async function API(){
//     const req=await fetch(URL);
//     const res=await req.json();
//     console.log(res);    
// })()


// console.log('start')

// async function API(){
//     console.log('calling api');
//     const req=await fetch(URL);
//     console.log('making datat in json format');
//     const res=await req.json();
//     console.log('data fetched');
//     // console.log(res);    
// }

// API()

// console.log('end')



console.log('hello');

async function callApi(){
  const pr=await new Promise((res,rej)=>{
    console.log('promise started');
    setTimeout(()=>{
      res('done')
    },2000)
  })
  console.log('promise 1 completed');
  const pr2=new Promise((res,rej)=>{
    console.log('promise started');
    setTimeout(()=>{
      console.log('timeout 1')
    },2000)
  })
}

callApi()