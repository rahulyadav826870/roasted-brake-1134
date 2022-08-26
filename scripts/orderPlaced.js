

let userCart=JSON.parse(localStorage.getItem("cartItem"));
let prodBag=JSON.parse(localStorage.getItem("products"));
console.log(userCart)


let tab=document.querySelector("table");

let total=0;


// DONE WHEN DATA COLLECT FROM HOME PAGE
// userCart.map((item, index) => {
//   //console.log(item)
  
//     let prod = prodBag.filter((el) => {
//       if (item.id === el.id) {
//         return true;
//       }
//     });

//     let tr=document.createElement("tr");

//     let sr=document.createElement("td")
//     sr.textContent=index+1;


//     let title=document.createElement("td");
//     title.textContent=prod[0].title;


//     let quantity=document.createElement("td")
//     if(item.quantity){

//         quantity.textContent=item.quantity;
//     }else{
//         quantity.textContent=1;
//     }


//     let size=document.createElement("td")
//     if(item.size){
//         if(item.size=="Default"){
//             console.log(prod[0].size)
//             size.textContent=prod[0].size[0]
//         }else{

//             console.log(item.size)
//             size.textContent=item.size;
//         }
//     }


//     let price=document.createElement("td");
//     price.textContent=prod[0].price;
//     total+=+prod[0].price;


//     tr.prepend(sr,title,size,quantity,price);
//     tab.append(tr)
// })

// document.getElementById("total").textContent=`Subtotal Rs.${total.toFixed(2)}`
// document.getElementById("orderid").textContent=`Order Id. 288734${Math.floor(Math.random()*10000)}`
let arr=[];
localStorage.setItem("cartItem",JSON.stringify(arr));