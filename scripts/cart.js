

let userDataFromlogin = JSON.parse(localStorage.getItem("userDetail"));
console.log(user);

if (userDataFromlogin == null || userDataFromlogin.login == false) {
  alert("You have to login first");
  // window.location.href = "login.html";
}


let product = document.getElementById("product");

let dataFromHome = JSON.parse(localStorage.getItem("product"));


let cardFromHome = JSON.parse(localStorage.getItem("cartNumber")) || [];


productFun(cardFromHome);



function productFun(data) {
// when i got the data from Home page then apply mathematical logic
}

///check out button which redirect userto check out page
let checkout = document.getElementById("checkout")
checkout.addEventListener("click", () => {
  let cardFromHome = JSON.parse(localStorage.getItem("cartNumber")) || [];
  if(cardFromHome.length==0){
    checkoutMessage(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; There is no product in cart to checkout`, false);
  }else{
    window.location.href = "checkout.html";
  }
});

////cart update button which update the cart page
let update=document.getElementById("updatecart")
update.addEventListener("click", () => {
  // window.location.href = "addToCart.html";
});


// let checkoutMessage=(message, type)=>{
//      var emptyMessage = document.getElementById("message");
//      emptyMessage.innerHTML = message;
//      if(type)
//      {
//          emptyMessage.style.color="#3C763D";
//          emptyMessage.style.backgroundColor = "#DFF0D8"; 
//          emptyMessage.style.border = "2px solid #3C763D";
//      }
//      else
//      {
//          emptyMessage.style.color="black";
//          emptyMessage.style.backgroundColor = "#F2DEDE"; 
//          emptyMessage.style.border = "2px solid black";
//      }
//      emptyMessage.classList.toggle("show");
  
     
//    }