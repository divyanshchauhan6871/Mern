const http = require('http');
const fs = require('fs');
const url = require('url')
    


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
    card1 = card1.replace("__proDes__", `/product?id=${i}`);
    card1 = card1.replace("__INFO__", "Read More");
    str += card1
}

let page = htmlTemplate.replace('__PRODUCTS_CARD__', str);
page = page.replace("/* __style1__ */", styleTemp)


console.log("hello")
const app = http.createServer((req, res) => {
    // const path=url.parse(req.url);
    // const pathname=path.pathname;
    const { pathname, query } = url.parse(req.url, true);
    console.log(pathname)
    if (pathname == '/homepage') {
        res.end(page)
    }
    if (pathname == '/buy') {
        res.end("Currently page is in building phase")
    }
    else if (pathname == '/product') {
        const id = query.id;
        // console.log(product[id])
        // let card1 = cardTemplate.replace('Heading', product[id].brand)
        // card1 = card1.replace('description', product[id].description)
        // // let image = imgTemp.replace('__src__', product[id].thumbnail)
        // // card1 = card1.replace('__img__', image);
        // card1 = card1.replace("__proDes__", `/homepage`);
        // card1 = card1.replace("__INFO__", "Go home");

        // let prodpage1 = htmlTemplate.replace('__PRODUCTS_CARD__', card1)
        // prodpage1 = prodpage.replace("/* __style1__ */", styleTemp)

        let prodpage=fs.readFileSync('./templates/productpage.html','utf-8');
        prodpage=prodpage.replace('__IMAGE__',`<img src="${product[id].thumbnail}" alt="" height="300px">`)
        prodpage=prodpage.replace('__DESCRITION__',`
        <h2 style="display:inline">Title : </h2><span style="font-size:1.5rem">${product[id].title}</span><br>
        <h2 style="display:inline">Description : </h2><span style="font-size:1.5rem">${product[id].description}</span><br>
        <h2 style="display:inline">Price : </h2><span style="font-size:1.5rem">${product[id].price}</span><br>
        
        `)

        res.end(prodpage)

    }
    // else {
        // res.end("Some error occured")
    // }
})


app.listen(1400);