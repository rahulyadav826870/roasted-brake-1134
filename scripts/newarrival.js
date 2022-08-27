
    let data=[
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_16_1a9d9d52-bb4b-44b4-a0f3-e83b0696c320_360x.jpg?v=1658907159",
        title:"VITAMIN C SUPER BRIGHT FOAMING",
        price:"280",
        price1:280,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2_360x.jpg?v=1656934758",
        title:"CICA + NIACINAMIDE FACE",
        price:"565",
        price1:565,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_15_360x.webp?v=1658907103",
        title:"AHA BHA & PINEAPPLE FOAMING",
        price:"280",
        price1:280,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER_2_360x.png?v=1658907972",
        title:"WATERMELON SUPER GLOW",
        price:" 375",
        price1:375,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/moringashampoo_6fc70634-479a-4d4f-82dd-bb6de9fbeb89_360x.png?v=1658907892",
        title:"ARGAN OIL ANTI HAIRFALL",
        price:"590",
        price1:590,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicafacewash_12daa62a-9f18-4d9f-bacb-1ba15a1f4fad_360x.png?v=1658907126",
        title:"CICA & 2%SALICYCLIC FACE WASH",
        price:"375",
        price1:375,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_4_d34e6033-1d52-4a86-85c5-6419c4d1fdb1_360x.jpg?v=1655310462",
        title:"PEA PEPTIDE + CYSTEINE HAIR",
        price:" 633",
        price1:633,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicatoner_3_8fce9e22-c2b3-4cb9-87a6-7eb973679cf6_360x.jpg?v=1656935406",
        title:"CICA & NIACINAMIDE FACE",
        price:"375",
        price1:375,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-11_1_360x.jpg?v=1655310065",
        title:"CICA CALMING ACNE RESCUE",
        price:"396",
        price1:396,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/DAMAGESHAMPOO_b8a28fa5-387a-4952-b2e4-43d208bb34d5_360x.png?v=1658907324",
        title:"QUINOA PROTEIN & OLIVE ",
        price:"590",
        price1:590,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_1_7e78739e-57e0-4fc0-bffe-f68bd86ab876_360x.jpg?v=1655310503",
        title:"HYALURONIC + CERAMIDE HAIR ",
        price:"633 ",
        price1:633,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-8_1_360x.jpg?v=1655954846",
        title:"RICE WATER + HYALURONIC",
        price:" 445",
        price1:445,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_1_360x.png?v=1658907316",
        title:"QUINOA & OLIVE OIL",
        price:" 548",
        price1:548,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_1_360x.jpg?v=1655310429",
        title:"AHA EXFOLIATION APPLE CIDER",
        price:"590",
        price1:590,
        newarrival:1,
      },
      {
        images:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2_360x.png?v=1658907052",
        title:"20% VITAMIN C SERUN",
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