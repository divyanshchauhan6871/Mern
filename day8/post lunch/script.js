const http = require('http');
const fs = require('fs');
const url = require('url')


const express=require('express');

const app=express();


const data = fs.readFileSync('./data.json', 'utf-8');
const object = JSON.parse(data);
const product = object.products;
const htmlTemplate = fs.readFileSync('./templates/index.html', 'utf-8')
const styleTemp = fs.readFileSync('./templates/style.css', 'utf-8')
const cardTemplate = fs.readFileSync('./templates/card.html', 'utf-8')
const imgTemp = fs.readFileSync('./templates/image.html', 'utf-8')
// console.log(product.length)
let str = ``
for (let i = 0; i < product.length; i++) {
    let card1 = cardTemplate.replace('Heading', product[i].brand)
    card1 = card1.replace('description', product[i].description)
    let image = imgTemp.replace('__src__', product[i].thumbnail)
    card1 = card1.replace('__img__', image);
    card1 = card1.replace("__proDes__", `/product/${i}`);
    card1 = card1.replace("__INFO__", "Read More");
    str += card1
}

let page = htmlTemplate.replace('__PRODUCTS_CARD__', str);
page = page.replace("/* __style1__ */", styleTemp)


app.get('/home',(req,res)=>{
    res.send(page)
})
// console.log(prpage)
app.get('/product/:id',(req,res)=>{
    const id=+req.params.id
    console.log(id)
    let prpage=fs.readFileSync('./templates/productpage.html','utf-8')
    // console.log(prpage)
    prpage=prpage.replace('__IMAGE__',`<img src="${product[id].thumbnail}" alt="">`)
    prpage=prpage.replace('__IMAGE__',`
    <b>Title : </b>${product[id].title}`
)
    res.send(prpage)
})















app.listen(1400);















// const app = http.createServer((req, res) => {
//     // const path=url.parse(req.url);
//     // const pathname=path.pathname;
//     const { pathname, query } = url.parse(req.url, true);
//     console.log(pathname)
//     if (pathname == '/homepage') {
//         res.end(page)
//     }
//     else if (pathname == '/product') {
//         const id = query.id;
//         console.log(product[id])
//         let card1 = cardTemplate.replace('Heading', product[id].brand)
//         card1 = card1.replace('description', product[id].description)
//         let image = imgTemp.replace('__src__', product[id].thumbnail)
//         card1 = card1.replace('__img__', image);
//         card1 = card1.replace("__proDes__", `/homepage`);
//         card1 = card1.replace("__INFO__", "Go home");

//         let prodpage = htmlTemplate.replace('__PRODUCTS_CARD__', card1)
//         prodpage = prodpage.replace("/* __style1__ */", styleTemp)

//         res.end(prodpage)

//     }
//     else {
//         res.end("Some error occured")
//     }
// })