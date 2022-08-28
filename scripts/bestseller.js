


let data=[
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1_360x.jpg?v=1660731137",
      name:"VITAMIN C + E MOISTURIZER",
      price:"565",
      price1:565,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1_360x.png?v=1658906811",
      name:"CICA NICIANAMIDA NIGHT GEL",
      price:"470",
      price1:470,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1_360x.png?v=1658907926",
      name:"10% NIACINAMIDA FACE SERUM",
      price:"499",
      price1:499,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2_360x.png?v=1658906872",
      name:"RETINOL & CERAMIDE AGE CREAM",
      price:"625",
      price1:625,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_1_1_e0123849-0a5d-4c37-9ef6-96ad3836c842_360x.jpg?v=1660732568",
      name:"72 HR HYDRATING PROBIOTICGEL",
      price:"535",
      price1:535,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_4_360x.png?v=1657603288",
      name:"GLOW REVEALING VITAMIN C FACE SERUM",
      price:"599",
      price1:599,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/moringashampoo_6fc70634-479a-4d4f-82dd-bb6de9fbeb89_360x.png?v=1658907892",
      name:"ARGON OIL ANTI HAIRFALL",
      price:"599",
      price1:599,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask_360x.png?v=1658907624",
      name:"SALICYLIC & FRENCH GREEN CLAY",
      price:"499",
      price1:499,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONWASH_1_360x.jpg?v=1656934311",
      name:"WATERMELON SUPER GLOW FACE WASH",
      price:"375",
      price1:375,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vitcsleepmask_0b41297c-7c94-4e9c-b99a-b65fe22d6f6b_360x.jpg?v=1656935552",
      name:"PINEAPPLE GLOW VITAMIN C SLEEPING MASK ",
      price:"499",
      price1:499,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_4_d34e6033-1d52-4a86-85c5-6419c4d1fdb1_360x.jpg?v=1655310462",
      name:"PEA PEPTIDE +CYSTEINE HAIR SERUM",
      price:"633 ",
      price1:633,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1_360x.png?v=1658907666",
      name:"VITAMIN C + E LIP SLEEPING MASK",
      price:" 422",
      price1:422,
      newarrival:1,
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2_360x.png?v=1658907052",
      name:"20% VITAMIN C SERUM ",
      price:"499",
      price1:499,
      newarrival:1,
    },
   
  ]
  let appendData=(data)=>{
    let container = document.getElementById("container")
    container.innerHTML=null;
    data.forEach((el)=>{
      
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src=el.image;
      img.onclick=()=>{
        localStorage.setItem("product",JSON.stringify(el));
        window.location="product.html"
      }
      let name = document.createElement("h3");
      name.innerText=el.name;
      let price = document.createElement("p");
      price.innerText="₹"+" "+el.price;
      let btn = document.createElement("button");
      btn.innerText="Add To Cart"
      btn.onclick=()=>{
        addTocart(el)
      }
      div.append(img,name,price,btn);
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
             if(a.name > b.name) return -1
             if(a.name < b.name) return 1
             return 0
         })
        appendData(nameP);
     }else if (filter.value === "sortAtoZ"){
        let nameP = data.sort(function(a,b){
             if(a.name > b.name) return 1
             if(a.name < b.name) return -1
             return 0
         })
        appendData(nameP);
     }
  })

let cart = JSON.parse(localStorage.getItem("cart"))||[]
let addTocart=(data)=>{
console.log(cart)
alert("Product Added")
cart.push(data);
localStorage.setItem("products",JSON.stringify(cart))
}