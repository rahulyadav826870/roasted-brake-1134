

let userDataFromlogin = JSON.parse(localStorage.getItem("userDetail"));
console.log(userDataFromlogin);

if (userDataFromlogin == null || userDataFromlogin.login == false) {
  alert("You have to login first");
  // window.location.href = "login.html";
}


let product = document.getElementById("product");

let dataFromHome = JSON.parse(localStorage.getItem("product"));


let cardFromHome = JSON.parse(localStorage.getItem("cartItem")) || [];


productFun();



function productFun() {
// when i got the data from Home page then apply mathematical logic
cardFromHome = JSON.parse(localStorage.getItem("cartItem")) || [];

let quantityArray;

let indexCount = 0;

//collect total cart amount
let totalAmount = 0;


product.innerHTML = "";

let userCart = [];

cardFromHome.forEach((el) => {
  if (user.email === el.email) {
    userCart.push(el);
  }
});

///whenever cart is empty
if (userCart.length == 0) {
  product.innerHTML = `<h2>No Product</h2>`;
} else {

  quantityArray = [...Array(userCart.length).fill(1)];

  userCart.map((item, index) => {
    //console.log(item)
    if (user.email === item.email) {

      let prod = prodBag.filter((el) => {
        if (item.id === el.id) {
          return true;
        }
      });

      let div = document.createElement("div");
      //image div
      let imgDiv = document.createElement("div");

      //title div
      let titleBtnDiv = document.createElement("div");
      titleBtnDiv.setAttribute("id", "title-btn");

      let img = document.createElement("img");
      img.src = prod[0].images[0];
      imgDiv.append(img);

      let title = document.createElement("h4");
      title.setAttribute("class", "tttt");
      title.textContent = prod[0].title;

      let remBtn = document.createElement("button");
      remBtn.textContent = "Remove";
      remBtn.addEventListener("click", () => {
        removeFun(item,index)
      
      });
      titleBtnDiv.append(title, remBtn);

      let QuentityDiv = document.createElement("div");
      QuentityDiv.setAttribute("id", "quentity");
      let queInput = document.createElement("input");
      queInput.setAttribute("class", "inputnum");
      console.log(item.quantity, item);


      if (item.quantity == undefined || item.quantity == null) {
        queInput.value = 1;
      } else {
        // vice versa
        queInput.value = item.quantity;
      }

      queInput.type = "Number";
      QuentityDiv.append(queInput);


      let span = document.createElement("span");
      span.textContent = indexCount;
      //span.style.Display="none";
      queInput.addEventListener("blur", (e) => {
        //to target the value of input
        let num = e.target.value;

        //making no
        num = +num;

        let indexingofitem = e.target.parentNode.nextSibling.textContent;

     
        console.log(indexingofitem);

        quantityArray[indexingofitem] = num;
 

        let x = Math.floor((prod[0].discount / 100) * prod[0].price);
        x = prod[0].price - x;
        let y = x;
        x = x * num;
        /// total amount updating.
        totalAmount += x - y;

        x = x.toFixed(2);
 
        amountDiv.textContent = `RS. ${x}`;
        //subtotal(userCart ,index,num);
        document.getElementById(
          "subtotal"
        ).textContent = `Rs. ${totalAmount.toFixed(2)}`;
        item.quantity = num;


        quantityAdder();
      });

      let amountDiv = document.createElement("div");
      amountDiv.setAttribute("id", "amount");
      let x = Math.floor((prod[0].discount / 100) * prod[0].price);
      x = prod[0].price - x;
      if (item.quantity) {
        x = x * item.quantity;
      }
      totalAmount += x;
      x = x.toFixed(2);
      //console.log(x)
      amountDiv.textContent = `RS. ${x}`;
    

      div.append(imgDiv, titleBtnDiv, QuentityDiv, span, amountDiv);

      cartProduct.append(div);
    }
    indexCount += 1;
  });

  document.getElementById(
    "subtotal"
  ).textContent = `Rs. ${totalAmount.toFixed(2)}`;
}

function quantityAdder() {
  userCart.map((el, index) => {
    el.quantity = quentityArray[index];
  });

  localStorage.setItem("cartItem", JSON.stringify(userCart));
  console.log(userCart);
}
}


function removeFun(el,index){
    //console.log(index)
    cartBag.splice(index, 1);
    localStorage.setItem("cartItem", JSON.stringify(cartBag));
    myFunction(`<span class="iconify" data-icon="teenyicons:tick-circle-solid" style="color: #3c763d; font-size: 22px;"></span> &nbsp; Item removed`, true);

    productFun();
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
  window.location.href = "addToCart.html";
});


let checkoutMessage=(message, type)=>{
     var emptyMessage = document.getElementById("message");
     emptyMessage.innerHTML = message;
     if(type)
     {
         emptyMessage.style.color="#3C763D";
         emptyMessage.style.backgroundColor = "#DFF0D8"; 
         emptyMessage.style.border = "2px solid #3C763D";
     }
     else
     {
         emptyMessage.style.color="black";
         emptyMessage.style.backgroundColor = "#F2DEDE"; 
         emptyMessage.style.border = "2px solid black";
     }
     emptyMessage.classList.toggle("show");
   }