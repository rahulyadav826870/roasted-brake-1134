let userDataFromlogin = JSON.parse(localStorage.getItem("userDetail"));

 let name1=document.getElementById("user_details_name");
 name1.textContent=`${userDataFromlogin.name}`;
 

let address = JSON.parse(localStorage.getItem("address_Info")) || [];

 document.querySelector("form").addEventListener("submit",addressFun);

 function addressFun(event) {
     event.preventDefault();
     
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
 localStorage.setItem("address_Info", JSON.stringify(address));
} 


// cart page
document.getElementById("return_to_cart")
.addEventListener("click", function () {
   window.location.href = "cart.html";
});


// shipping page
document.getElementById("return_to_shipping")
.addEventListener("click", function () {
//    window.location.href = "../shiping.html";    // day4 work
});


let cartDiv=document.getElementById("cartBox");


let cartBag=JSON.parse(localStorage.getItem("cartItem"));
let dataFromHome=JSON.parse(localStorage.getItem("product"));
////console.log(dataFromHome)

console.log(cartBag)


let totalAmount=0;
cartBag.forEach((el)=>{
//   data calculation  ,,when home work done then apply logic here 
   
})

document.getElementById("subtotal").innerHTML=`Subtotal. Rs. &#8377;`   // data price calculation put here 
document.getElementById("total").innerHTML=`Total Rs. &#8377;`    // data price calculation put here 
