// // let cartDiv = document.getElementById("cartBox");


// let cartBag = JSON.parse(localStorage.getItem("cartItem"));
// let prod = JSON.parse(localStorage.getItem("products"));

// console.log(cartBag)

// let totalAmount = 0;
// cartBag.map((item) => {
//     let x = prod.filter((el) => {
//         if (item.id === el.id) {
//             return true;
//         }
//     })
//     //console.log(x)
//     let num;
//     let div = document.createElement("div");
//     let divimg = document.createElement("div")
//     let img = document.createElement("img");
//     img.src = x[0].images[0];
//     if (item.quantity) {
//         num = item.quantity;
//     } else {
//         num = 1;
//     }
//     console.log(num)
//     let nodiv = document.createElement("div");
//     nodiv.setAttribute("class", "quantutyno");
//     nodiv.textContent = num;
//     let name = document.createElement("h3");
//     name.textContent = x[0].title;

//     divimg.append(nodiv, img)
//     let price = document.createElement("h5");
//     let disc = Math.floor((x[0].discount / 100) * x[0].price);
//     disc = x[0].price - disc;
//     totalAmount+=+disc;
//     price.innerHTML= `&#8377; ${disc.toFixed(2)}`;    div.append(divimg, name, price);
//     //div.innerHTML="asdsd"
//     cartDiv.append(div)

// })
// document.getElementById("subtotal").textContent = `Subtotal. Rs. ${totalAmount.toFixed(2)}`
// document.getElementById("total").textContent = `Total Rs. ${totalAmount.toFixed(2)}`
// let add = JSON.parse(localStorage.getItem("addAddress"))
// console.log(add)

// let str = `${add[0].firstname} ${add[0].lastname} ${add[0].address_one} ${add[0].address_two} ${add[0].pincode} ${add[0].city} ${add[0].state} ${add[0].country}`
// console.log(str)

// document.getElementById("con").textContent = add[0].email;
// document.getElementById("addre").textContent =  str;