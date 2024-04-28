const div = document.getElementById('listcontainer')
const btn = document.getElementById('removebtn')
const btnl = document.getElementById('removebtnl')

// div.remove()

dellist = () => {
    // div.removeChild(div.firstElementChild)
    div.removeChild(div.children[0])
    // div.remove()
}
dellistl = () => {
    div.removeChild(div.lastElementChild)
}

// div.removeChild(div.children[0]);
// the above mentioned statement will remove the nth child of the parent node selected

// open=()=>{
// window.close();
// }
const myphot = document.getElementById('myphoto');
const viewphotoo = document.getElementById('viewphotoo');
const dephotoo = document.getElementById('dephotoo');
viewphoto = () => {
    myphot.style.display = 'block'
    viewphotoo.style.display = 'none';
    dephotoo.style.display = 'inline';
}
delphoto = () => {
    myphot.style.display = 'none'
    viewphotoo.style.display = 'inline';
    dephotoo.style.display = 'none';
}

const bodyy = document.body
changebg = () => {
    if (bodyy.style.backgroundColor == 'aqua') {
        // bodyy.style.backgroundColor='yellow';
        bodyy.setAttribute('style', 'background-color:orange');
        // const bgcome=
    }
    else
        bodyy.style.backgroundColor = 'aqua';
}

// const name1=document.getElementsByName('name').target.value
// const area=document.getElementsByName('area').innerHTML
// const show=document.getElementById('show')


submitfunc = () => {
    //     // const str=`${name1}'s your description is ${area}`;
    //     // show.innerHTML=str
    const name1 = document.getElementById("namebox").value
    console.log(name1);
}
dis = (e) => {
    console.log(e)
}

function submitForm(e) {
    e.preventDefault()
    console.log(e)
    const t = e.target;
    const res = [];
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        const vl = t[i].value;
        // console.log(ty, vl);
        // console.log((t)[i].value)
        if ((ty == 'checkbox' && t[i].checked) || (ty == 'text' && ty != 'submit') || (ty == 'number' && t[i] > 0) || (ty == 'radio' && t[i].checked)) {
            // console.log(t[i].checked);
            res.push(vl)
        }
        // if(ty!='submit' && ty=='checkbox' && t[i].checked)
        // if(ty!='submit')
        // res.push(vl);
    }
    console.log(res)
}


