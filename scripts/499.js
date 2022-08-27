
    let data=[
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pinkclaymask_1f29e041-04b7-4b13-875e-0ffa582f92e2_360x.jpg?v=1656935595",
        title:"VITAMIN C PINK CLAY FACE MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1_360x.png?v=1658907926",
        title:"10% NIA CINAMIDE FACE SERUM",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask_360x.png?v=1658907624",
        title:"SALICYLIC & FRENCH GREEN MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vitcsleepmask_0b41297c-7c94-4e9c-b99a-b65fe22d6f6b_360x.jpg?v=1656935552",
         title:"PINEAPPLE GLOW VITAMIN C MASK",
        price:" 499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_4_360x.png?v=1657603288",
        title:"GLOW REVEALING VITAMIN C FACE SERUM",
        price:"599",
        price1:599,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/hpgp_360x.jpg?v=1656934856",
        title:"10% AHA + 2% BHA EXFOLIATING GLOW",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_3_7231ae56-0a07-472c-92c1-7d34bc93cf57_360x.jpg?v=1648088737",
        title:"DETAN + GLOW GREEN TEA MASK",
        price:" 499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_3_40c5e702-0b60-49a1-abb2-812d62d223c0_360x.jpg?v=1648088715",
        title:"CHOCOLATE GLOW FACE MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ha_360x.jpg?v=1656934997",
        title:"HYDARTING HYALURONIC FACE SERUM",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/gloes_360x.jpg?v=1656934991",
        title:"30% AHA + 2% BHA GLOW",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_360x.jpg?v=1644862670",
        title:"ROSHIP GLOW ELIXIR FACE OIL",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_1_10b465b9-d11f-4394-9ddd-2eef7ae4037d_360x.jpg?v=1655310309",
        title:"DAMASK ROSE RESUFACING MASK",
        price:" 499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_4494a133-19ca-46ad-9ec2-19a60ad70e48_360x.jpg?v=1655310163",
        title:"CICA CALMING RAPID MASK",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/alpha_d391f76e-ef30-427f-8657-3cfe4c8d84eb_360x.jpg?v=1656934978",
       title:"ALHA ARBUTIN + AZELAIC SERUM",
        price:"499",
        price1:499,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_1_360x.jpg?v=1644916657",
         title:"AVOCADO + SUPERFOODS OIL",
        price:" 499",
        price1:499,
        newarrival:1,
      }
    ]
    let appendData=(data)=>{
  let container = document.getElementById("container")
  container.innerHTML=null;
  data.forEach((el)=>{
    
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src=el.images;
    img.onclick=()=>{
      localStorage.setItem("product",JSON.stringify(el));
      window.location="product.html"
    }
    let title = document.createElement("h3");
    title.innerText=el.title;
    let price = document.createElement("p");
    price.innerText="₹"+" "+el.price;
    let btn = document.createElement("button");
    btn.innerText="Add To Cart"
    btn.onclick=()=>{
      addTocart(el)
    }
    div.append(img,title,price,btn);
    container.append(div)
  })
}
appendData(data);

let filter = document.getElementById("filter");

  filter.addEventListener("change",function(){
    if(filter.value === "position"){
        appendData(data);
        window.location.reload(true);
     }
    // else if (filter.value === "NewArrival"){
    //     let filtered = data.filter(function(element){
    //         return element.nwearrival===1;
    //     })
    //     appendData(filtered);
    else if (filter.value === "LowToHigh"){
       let priceLH = data.sort(function(a,b){
            if(a.price > b.price) return 1
            if(a.price < b.price) return -1
            return 0
        })
       appendData(priceLH);
    }else if (filter.value === "HighToLow"){
        let priceHL = data.sort(function(a,b){
             if(a.price > b.price) return -1
             if(a.price < b.price) return 1
             return 0
         })
        appendData(priceHL);
     }else if (filter.value === "sortZtoA"){
        let nameP = data.sort(function(a,b){
             if(a.title > b.title) return -1
             if(a.title < b.title) return 1
             return 0
         })
        appendData(nameP);
     }else if (filter.value === "sortAtoZ"){
        let nameP = data.sort(function(a,b){
             if(a.title > b.title) return 1
             if(a.title < b.title) return -1
             return 0
         })
        appendData(nameP);
     }
  })


let cart = JSON.parse(localStorage.getItem("cart"))||[]
let addTocart=(data)=>{
  console.log(cart)
  cart.push(data);
  localStorage.setItem("cart",JSON.stringify(cart))
}


import navbar from "./navbarhtml.js";
console.log(navbar)
let navbar_container = document.getElementById("navbar");
navbar_container.innerHTML=navbar();