// for reading file system
// const fs = require('node:fs');
// let t1=performance.now()


// const str=fs.readFileSync('./demo.txt','utf-8')
// console.log(str);

//  readFileSync function returns the file read content in the form of buffe and we can convert it to string using toString() function
// const str=fs.readFileSync('./demo.txt')
// console.log(str.toString());


// const str="My name is Divyansh Chauhan"
// fs.writeFileSync("./write.txt",str);

// const str=fs.readFileSync('./demo.txt','utf-8')
// console.log(str);
// let t2=performance.now()
// console.log(t2-t1);


// const fsPromise = require('fs/promises')
// console.log('start')
// let pr=fsPromise.readFile('./demo.txt', 'utf-8')
// pr.then((res)=>{
//     console.log(res)
// })
// console.log('end')


const fs=require('fs');
console.log('start')
fs.readFile('demo.txt','utf-8',(err,text)=>{
    if(err){
        console.log("some error occured");
    }
    console.log(text)
})
console.log('end')