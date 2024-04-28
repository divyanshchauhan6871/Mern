function sum(a,b,callbac){
    let sum=a+b;;
    callbac(sum);
}
function printf(a){
    console.log(a);
    document.write(a)
}
sum(3,8,printf);



// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr)
// arr.forEach((ele,inde,arr)=>{
//     console.log(inde,ele,arr);
//     ele=ele*ele
//     console.log(ele);
// })
// console.log(arr)


// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr)
// let arr2=arr.map((val,index,arr)=>{
//     console.log(val+index);
//     return val+index;
// })
// console.log(arr2)


// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr)
// let arr2=arr.filter((ele , ind,arr)=>{
//     console.log(ind,ele,arr);
//     if(ele%2==0)
//     return ele;
// })
// console.log(arr2)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr)
// let arr2 = arr.reduce((a, b) => {
//     // if (a > b)
//     //     return a
//     // else return b
//     return a+b
// })
// console.log(arr2)