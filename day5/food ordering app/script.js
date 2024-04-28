const URL="https://dummyjson.com/recipes"

async function fetchApi(){
    let req= await fetch(URL);
    let res= await req.json();
    res=res.recipes
    let str=``;
    str+=`<table>
    <tr>
        <th>S.no</th>
        <th>Image</th>
        <th>Name</th>
        <th>Preparation time</th>
        <th>Meal Type</th>
        <th>Cuisine</th>
        <th>Rating</th>
    </tr>`
    console.log(res);
    for(let i=0;i<res.length;i++){
        let a=res[i];
        str+=`
        <tr>
            <td>${i+1}</td>
            <td><img src="${a.image}"></td>
            <td>${a.name}</td>
            <td>${a.prepTimeMinutes}</td>
            <td>${a.mealType}</td>
            <td>${a.cuisine}</td>
            <td>${a.rating}</td>
        </tr>
    `}
    str+=`</table>`;
    let root=document.getElementById('root');
    root.innerHTML=str;
}

fetchApi()