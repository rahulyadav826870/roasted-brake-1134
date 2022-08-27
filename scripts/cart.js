
import navbar from "../component/navbar.js"

let navbar1=document.querySelector("#navbar")
navbar1.innerHTML=navbar()
// let userDataFromlogin = JSON.parse(localStorage.getItem("userDetail"));
// console.log(userDataFromlogin);

// if (userDataFromlogin == null || userDataFromlogin.login == false) {
//   alert("You have to login first");
//   // window.location.href = "login.html";
// }


let product = document.getElementById("cart-product");

// let dataFromHome = JSON.parse(localStorage.getItem("product"));

//subtotal
let Subtotal = 0;
//get the items from local storage
let container = document.getElementById("cart-product");
let cart= JSON.parse( localStorage.getItem("products"));
console.log(cart);
cart.forEach((el)=>{
let div = document.createElement("div");
div.setAttribute("class","product");
let img = document.createElement("img");
img.src=el.image;
let title = document.createElement("h3");
title.innerText=el.name;
let price = document.createElement("p");
price.innerText=el.price;
Subtotal+=Number(el.price)
// console.log(typeof(Subtotal))
div.append(img,title,price);
container.append(div);
})

// console.log(Subtotal)
let subtotal = document.getElementById("subtotal")
subtotal.innerText=`Rs. ${Subtotal.toFixed(2)}`;
localStorage.setItem("subtotal",JSON.stringify(Subtotal))
// import navbar from "./navbarhtml.js"

// let navbar_container = document.getElementById("navbar");
// navbar_container.innerHTML=navbar()