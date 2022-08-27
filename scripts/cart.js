

// let userDataFromlogin = JSON.parse(localStorage.getItem("userDetail"));
// console.log(userDataFromlogin);

// if (userDataFromlogin == null || userDataFromlogin.login == false) {
//   alert("You have to login first");
//   // window.location.href = "login.html";
// }


// let product = document.getElementById("product");

// let dataFromHome = JSON.parse(localStorage.getItem("product"));

//subtotal
let Subtotal = 0;
//get the items from local storage
let container = document.getElementById("product");
let cart= JSON.parse( localStorage.getItem("cart"));
console.log(cart);
cart.forEach((el)=>{
let div = document.createElement("div");
div.setAttribute("class","product");
let img = document.createElement("img");
img.src=el.images[0];
let title = document.createElement("h3");
title.innerText=el.title;
let price = document.createElement("p");
price.innerText=el.price;
Subtotal+=Number(el.price)
div.append(img,title,price);
container.append(div);
})


let subtotal = document.getElementById("subtotal")
subtotal.innerText=Subtotal;
localStorage.setItem("subtotal",JSON.stringify(Subtotal))
import navbar from "./navbarhtml.js"

let navbar_container = document.getElementById("navbar");
navbar_container.innerHTML=navbar()