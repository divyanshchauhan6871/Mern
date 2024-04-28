// const http = require('http');
const fs = require('fs');
const url = require('url')


const express = require('express');


const app = express();

app.use((req, res, next)=>{
    console.log(req.url);
    console.log(req.query);
    console.log('-------------\n');
    next();
})


let searchEle = `<form action="/products">
<input type="text" name="prodName">
<button type="submit">Submit</button>
</form>
`

const data = fs.readFileSync('./data.json', 'utf-8');
const object = JSON.parse(data);
const product = object.products;
const htmlTemplate = fs.readFileSync('./templates/index.html', 'utf-8')
const styleTemp = fs.readFileSync('./templates/style.css', 'utf-8')
const cardTemplate = fs.readFileSync('./templates/card.html', 'utf-8')
const imgTemp = fs.readFileSync('./templates/image.html', 'utf-8')
// console.log(product.length)


app.get('/home', (req, res) => {
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
    searchEle = searchEle + page;
    res.send(searchEle)
})
// console.log(prpage)
app.get('/product/:id', (req, res) => {
    const id = +req.params.id
    console.log(id)
    let prpage = fs.readFileSync('./templates/productpage.html', 'utf-8')
    // console.log(prpage)
    prpage = prpage.replace('__IMAGE__', `<img src="${product[id].thumbnail}" alt="">`)
    prpage = prpage.replace('__IMAGE__', `
    <b>Title : </b>${product[id].title}`
    )
    res.send(prpage)
})
app.get('/products', (req, res) => {
    const query  =req.query; 
    let name = query.prodName

    let sear = product.filter((ele) => {
        if (ele.brand.includes(name)) {
            return true
        }
        else {
            return false
        }
    })

    let strr = ``
    for (let i = 0; i < sear.length; i++) {
        let card1 = cardTemplate.replace('Heading', sear[i].brand)
        card1 = card1.replace('description', sear[i].description)
        let image = imgTemp.replace('__src__', sear[i].thumbnail)
        card1 = card1.replace('__img__', image);
        card1 = card1.replace("__proDes__", `/product/${i}`);
        card1 = card1.replace("__INFO__", "Read More");
        strr += card1
    }

    let pagesearch = htmlTemplate.replace('__PRODUCTS_CARD__', strr);
    pagesearch = pagesearch.replace("/* __style1__ */", styleTemp)





    res.send(searchEle + pagesearch)
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