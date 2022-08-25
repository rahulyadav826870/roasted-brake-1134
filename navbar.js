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
        y.src="https://www.kindpng.com/picc/m/134-1342936_x-mark-clip-art-black-x-clipart-hd.png"

    }
}