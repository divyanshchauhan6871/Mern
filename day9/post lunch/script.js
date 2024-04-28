const http = require('http');
const fs = require('fs');
const url = require('url')
const fsPromise = require('fs/promises')


const express = require('express');

const app = express();
app.use(express.json())

const htmlTemplate = fs.readFileSync('./templates/index.html', 'utf-8')
const styleTemp = fs.readFileSync('./templates/style.css', 'utf-8')
const cardTemplate = fs.readFileSync('./templates/card.html', 'utf-8')
const imgTemp = fs.readFileSync('./templates/image.html', 'utf-8')

let data = fs.readFileSync('./data.json', 'utf-8');
let product = JSON.parse(data)
// console.log(data)


// app.get('/api/products', (req, res) => {
//     let str = ``
//     for (let i = 0; i < product.length; i++) {
//         let card1 = cardTemplate.replace('Heading', product[i].brand)
//         card1 = card1.replace('description', product[i].description)
//         let image = imgTemp.replace('__src__', product[i].thumbnail)
//         card1 = card1.replace('__img__', image);
//         card1 = card1.replace("__proDes__", `/product/${i}`);
//         card1 = card1.replace("__INFO__", "Read More");
//         str += card1
//     }

//     let page = htmlTemplate.replace('__PRODUCTS_CARD__', str);
//     page = page.replace("/* __style1__ */", styleTemp)
//     res.send(page)
// })


app.get('/api/products',(req, res) => {
    res.json({
        status: "success",
        result: product.length,
        data: { product }
    })
})

app.post('/api/products', async (req, res) => {
    const data = req.body;
    console.log(data);
    // if(!data.title || !data.class){
    //     res.json({
    //         status:'fail'
    //     })
    // }

    const db = await fsPromise.readFile( './data.json',"utf8" );
    const arr= JSON.parse(db);
    const len = arr.length;
    const newProduct=data;
    if(len==0){
        newProduct.id=1;
    }
    else{
        newProduct.id=(arr[len-1].id)+1;
    }
    arr.push(newProduct);
    fsPromise.writeFile("./data.json",JSON.stringify(arr));
    
    
    res.json({
        status: 'sucess',
        results: 1,
        data:{
            newProduct: newProduct,
        }
    });
    
    
});



app.put('/api/products/:id',async(req, res) => {
    let arr = JSON.parse(await fsPromise.readFile( './data.json',"utf8" ));
    const id=+req.params.id
    const prodIndex=arr.findIndex(p=>{return p.id===id})
    arr.splice(prodIndex,1,{...req.body,id:id})
    res.send(req.body)
    fsPromise.writeFile("./data.json",JSON.stringify(arr));
})




app.delete('/api/products/:id',async(req, res) => {
    let arr = JSON.parse(await fsPromise.readFile( './data.json',"utf8" ));
    const id=+req.params.id
    const prodIndex=arr.findIndex(p=>{return p.id===id})
    arr.splice(prodIndex,1)
    res.send(req.body)
    fsPromise.writeFile("./data.json",JSON.stringify(arr));
})






app.listen(1400);



