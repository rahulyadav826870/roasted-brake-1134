 // store address which is written in form

 document.querySelector("form").addEventListener("submit",addAddress);
 var address = JSON.parse(localStorage.getItem("addressInfo")) || [];
 function addAddress(a) {
 a.preventDefault();
 let userDataFromlogin = JSON.parse(localStorage.getItem("userDetail"));

 var addressObj = {
     country:form.use_address1.value,
     firstname: form.first_name.value,
     lastname: form.last_name.value,
     address_one: form.address_1.value,
     address_two: form.address_2.value,
     city: form.city.value,
     state: form.state_name.value,
     pincode: form.pin_code.value,
     phonenum: form.phone_num.value,
     saveInfo: form.save_info.value,
     email:user_detail.email
 };

 console.log(addressObj);
 address.push(addressObj);
 localStorage.setItem("addAddress", JSON.stringify(address));
} 


//  document.querySelector("button").addEventListener("click",function() {
//     //  window.location.href = "cart.html";
//  });


//returns to the cart page
document.getElementById("return_to_cart")
.addEventListener("click", function () {
   window.location.href = "cart.html";
});


//go to the shipping page
document.getElementById("return_to_shipping")
.addEventListener("click", function () {
   window.location.href = "../shiping2.html";
});


//access user login details(name and email)

userDataFromlogin = JSON.parse(localStorage.getItem("userDetail"));
//console.log(userDataFromlogin);
let names=document.getElementById("user_details_name");
names.textContent=`${userDataFromlogin.name}`;

let cartDiv=document.getElementById("cartBox");


let cartBag=JSON.parse(localStorage.getItem("cartItem"));
let dataFromHome=JSON.parse(localStorage.getItem("DotAndKeyProducts"));
////console.log(dataFromHome)
console.log(cartBag)
//cartDiv.innerHTML=""
let totalAmount=0;
cartBag.map((item)=>{
   let x=prod.filter((el)=>{
      if(item.id===el.id){
         return true;
      }
   })
   //console.log(x)
   let num;
   let div=document.createElement("div");
   let divimg=document.createElement("div")
   let img=document.createElement("img");
   img.src=x[0].images[0];
   if(item.quantity){
       num=item.quantity;
   }else{
       num=1;
   }
   console.log(num)
   let nodiv=document.createElement("div");
   nodiv.setAttribute("class","quantutyno");
   nodiv.textContent=num;
   let name=document.createElement("h3");
   name.textContent=x[0].title;

   divimg.append(nodiv,img)
   let price=document.createElement("h5");
   let disc = Math.floor((x[0].discount / 100) * x[0].price);
   disc = x[0].price - disc;
   totalAmount+=+disc;
   price.innerHTML= `&#8377; ${disc.toFixed(2)}`;

   //console.log(x[0].price)
   div.append(divimg,name,price);
   //div.innerHTML="asdsd"
   cartDiv.append(div)
   
})

document.getElementById("subtotal").innerHTML=`Subtotal. Rs. &#8377;${totalAmount.toFixed(2)}`
document.getElementById("total").innerHTML=`Total Rs. &#8377;${totalAmount.toFixed(2)}`
//console.log(totalAmount);