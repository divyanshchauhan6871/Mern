const URL="https://dummyjson.com/products";
// const URL="https://dummyjson.com/products/search?q=Laptop";

async function callAPI(){
    let req=await fetch(URL);
    let res=await req.json();
    // for(item in res){
    //     console.log(item);
    // }
    console.log(res);
    res=res.products;
    // console.log(res.length)
    let str=``
    for(let i=0;i<res.length-2;i++){
        str+=`
        <div style="padding:5px;height:100%;display:inline-block;padding: 1rem" class="col-lg-3 col-md-4 col-sm-6 col-sx-12 cart-container p-4">
        <p style="font-weight:bolder; text-align :center">${i+1} : ${res[i].title}</p>
        <img class="scaleup" height='300px' width=100% src="${res[i].images[0]}" alt="">
        <p>Brand name : ${res[i].brand}
        <br>
        <b>Description : </b>${res[i].description}</p>
        <p><img width='25%' src="${res[i].thumbnail}" alt=""> Remaining pieces : ${res[i].stock}</p>
        <hr>
        <p style="text-align:center"><button>Buy now at ${res[i].price}$</button></p>
        </div>`
    }
    let container=document.getElementById("container");
    container.innerHTML=str;
}

callAPI()