function first(){
    let x=document.getElementById("in-show")
    let y=document.getElementById("first")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function second(){
    let x=document.getElementById("co-show")
    let y=document.getElementById("second")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function third(){
    let x=document.getElementById("pr-show")
    let y=document.getElementById("third")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function forth(){
    let x=document.getElementById("be-show")
    let y=document.getElementById("forth")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function fifth(){
    let x=document.getElementById("pr-show2")
    let y=document.getElementById("fifth")

    
    if(x.style.display=="block"){
        x.style.display="none"
        y.innerText="+"
    }
    else{
        x.style.display="block"
        y.innerText="-"
    }
}
function loadmenu(){
    let x=document.getElementById("mainmenu")
    let y=document.getElementById("menuIcon")
    if(x.style.display=="block"){
        x.style.display="none"
        y.src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
    }
    else{
        x.style.display="block"
        y.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKAZ-B055VeHlpPaWIDB4xwRICm3GdbXvLw&usqp=CAU"
       
    }
}
let text = document.getElementById('text');
let texts = ['SERUMS & MASKS AT FLAT 499','5 BESTSELLERS FREE ON ORDERS 1099+',"UPTO 20% OFF SITEWIDE",'3% OFF ON PREPAID ORDERS+ 10% CASHBACK'];
let i=0;
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    text.innerText = texts[i];
    i++;
    if(i==4){
        i=0;
    }
    

},10000)
