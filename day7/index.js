const http = require('http');
const fs = require('fs')
const p=5;


// const http =require('http');
// console.log("hello")
// const app=http.createServer((req,res)=>{
//     console.log('Request recieved');
//     res.writeHead(200,{
//         'content-type':'text/html'
//         // 'content-type':'text/plain'
//     })
//     // console.log(req);
//     // console.log(req.url);
//     // res.write
//     // res.end("hello")
//     res.end("<h1>hello world</h1><p>lorem</p><p>lorem</p>")
//     // res.end('/index.html')
// })

// app.listen(1400);




const data = fs.readFileSync('./data.json', 'utf-8');
const object = JSON.parse(data);
const product = object.products;
const htmlTemplate = fs.readFileSync('./templates/page.html','utf-8')
const styleTemp=fs.readFileSync('./templates/style.css','utf-8')
const cardTemplate = fs.readFileSync('./templates/card.html','utf-8')

let str = ``
for (let i = 0; i < product.length; i++) {
    let card1 = cardTemplate.replace('Heading', product[i].brand)
    card1 = card1.replace('description', product[i].description)
    str += card1
}
let page = htmlTemplate.replace('_PRODUCTS_CARD_', str);
page=page.replace("/* _style1_ */",styleTemp)


console.log("hello")
const app = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end(page)
})


app.listen(1400);