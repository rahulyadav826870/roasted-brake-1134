let cartDiv = document.getElementById("cartBox");


let cartBag = JSON.parse(localStorage.getItem("products"));
let prod = JSON.parse(localStorage.getItem("products"));
////console.log(prod)
console.log(cartBag)
//cartDiv.innerHTML=""
// let totalAmount = 0;


// DATA FROM HOME PAGE
let totalAmount=0;
cartBag.forEach((el)=>{
//   data calculation  ,,when home work done then apply logic here 
// let x=dataFromHome.filter((el)=>{
//     if(item.id===el.id){
//        return true;
//     }
//  })
 //console.log(x)
 let num;
 let div=document.createElement("div");
 let divimg=document.createElement("div")
 let img=document.createElement("img");
 img.src=el.image;
 if(el.quantity){
     num=el.quantity;
 }else{
     num=1;
 }
 console.log(num)
 let nodiv=document.createElement("div");
 nodiv.setAttribute("class","quantutyno");
 nodiv.textContent=num;
 let name=document.createElement("h3");
 name.textContent=el.name;

 divimg.append(nodiv,img)
 let price=document.createElement("h5");
 let disc = Math.floor((el.discount / 100) * Number(el.price) );
 console.log(typeof(disc))
 disc = Number(el.price) - disc;
 totalAmount+=+disc;
 price.innerHTML= `&#8377; ${el.price}`;

 //console.log(el.price)
 div.append(divimg,name,price);
 //div.innerHTML="asdsd"
 cartDiv.append(div)
   
})
let total = JSON.parse(localStorage.getItem("subtotal"))
document.getElementById("subtotal").innerText=total
document.getElementById("total").innerText=total;
document.querySelector(".subtotal").innerText="Subtotal"
document.querySelector(".total").innerText="Total";
let add = JSON.parse(localStorage.getItem("address_Info")) || []
console.log(add)

let str = add[0].firstname + " " + add[0].lastname + " " + add[0].address_one + " " + add[0].address_two + add[0].pincode + " " + add[0].city + " " + add[0].state + " " + " " + add[0].country
console.log(str)
document.getElementById("con").textContent = add[0].firstname+" " + add[0].lastname;
document.getElementById("addre").textContent =  str;


function applyCoupon(){
     let code = document.getElementById("coupon_code").value;
     if(code=="masai04"){
         let discount=Number(total/100*15);
         document.getElementById("total").innerText=Number(total)-discount;;
         document.getElementById("discount").innerText="Saved 15% using masai04 coupon code 🎉🎉🎉";
         document.getElementById("discount").style.color="#50df50"
     }else{
         document.getElementById("discount").innerText="Inavalid coupon code";
         document.getElementById("discount").style.color="red"
     }
     }