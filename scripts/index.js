
    // 1st part          

    let slideIndex = 0;
    Saikat_showSlides();

    function Saikat_showSlides() {
        let i;
        let slides = document.getElementsByClassName("Saikat-mySlides_fade");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(Saikat_showSlides, 2700); // Change image every 2.7 seconds
    }


                                //  2nd part script 

    let images = [
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Sale_Banner_Desktop_27.jpg?v=1661143907",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5_Sale_Banner_Desktop_copy.jpg?v=1660886724",
    "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_Sale_Banner_Desktop_copy.jpg?v=1660886724"
    ];
    let index = 0;
    // let id;
    let conteiner = document.getElementById("image");
            let img = document.createElement("img");
            img.src = images[index];
            conteiner.append(img);
            document.getElementById("dot_1").style.backgroundColor = "#717171";

    let prevoius = () => {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        console.log(index)
        img.src = images[index];

        //dot-code
        if(index == 0){
            document.getElementById("dot_1").style.backgroundColor = "#717171";
        } else {
            document.getElementById("dot_1").style.backgroundColor = "#bbb";
        }

        if(index == 1){
            document.getElementById("dot_2").style.backgroundColor = "#717171";
        } else {
            document.getElementById("dot_2").style.backgroundColor = "#bbb";
        }
        
        if(index == 2){
            document.getElementById("dot_3").style.backgroundColor = "#717171";
        }else{
            document.getElementById("dot_3").style.backgroundColor = "#bbb";
        }
    }

    let next = () => {
        index++;
        console.log(index)
        if (index == images.length) {
            index = 0;
        }
        img.src = images[index];

        //dot-code
        if(index == 0){
            document.getElementById("dot_1").style.backgroundColor = "#717171";
        } else {
            document.getElementById("dot_1").style.backgroundColor = "#bbb";
        }

        if(index == 1){
            document.getElementById("dot_2").style.backgroundColor = "#717171";
        } else {
            document.getElementById("dot_2").style.backgroundColor = "#bbb";
        }
        
        if(index == 2){
            document.getElementById("dot_3").style.backgroundColor = "#717171";
        }else{
            document.getElementById("dot_3").style.backgroundColor = "#bbb";
        }
    }       

    
/////////////////////////////////// 3rd part //////////////////////////////

let data = [
    {
       image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/WATER_TONER.jpg?v=1658564108",
       name:"Vitamin C Super Bright Foaming Face Wash | Triple Vitamin C For",
       price: "Rs: 280.00",
       add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER_2.png?v=1658907972",
        name:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++|",
        price: "Rs: 375.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_16_1a9d9d52-bb4b-44b4-a0f3-e83b0696c320.jpg?v=1658907159",
        name:"20% Vitamin C Serum with Blood Orange & Ferulic Acid | For",
        price: "Rs: 523.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2.png?v=1658907052",
        name: "AHA BHA & Pineapple Foaming Face Wash | 5% Lactic, Glycolic &",
        price: "Rs: 849.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_15.webp?v=1658907103",
        name:"Vitamin C + E Moisturizer With Sicilian Blood Orange & ",
        price: "Rs: 231.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CICA_SUNSCREEN.jpg?v=1658564108",
        name: "CICA Niacinamide Night Gel  With Green Tea, Tea Tree Oil &",
        price: "Rs: 520.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_1_1_e0123849-0a5d-4c37-9ef6-96ad3836c842.jpg?v=1660732568",
        name: "Watermelon Super Glow Glycolic Toner With Lactic Acid",
        price: "Rs: 330.00",
        add_to_cart:"ADD TO CART"
    }
]


let number = 0;

let saikatCartObjects = JSON.parse(localStorage.getItem("cartObjects")) || []

let copy = ()=> {
    let cont = document.getElementById("copy");
    cont.innerHTML = null;
    let div1 = document.createElement("div");
    div1.id = "div1"
    let div2 = document.createElement("div");
    div2.id = "div2"
    let div3 = document.createElement("div");
    div3.id = "div3"



    let img1 = document.createElement("img");
    img1.src = data[number].image;
    let titel = document.createElement("p");
    titel.innerText = data[number].name;
    titel.id = "titel"
    let titel1 = document.createElement("p");
    titel1.innerText = data[number].price;
    titel1.id = "titel1"
    let titel2 = document.createElement("p");
    titel2.innerText = data[number].add_to_cart;
    titel2.id = "titel2"
    titel2.addEventListener("click", () =>{
        saikatCartObjects.push(data[number]);
        localStorage.setItem("cartObjects",JSON.stringify(saikatCartObjects));
    })
    div1.append(img1,titel,titel1,titel2);



    let img2 = document.createElement("img");
    img2.src = data[number+1].image;
    let t1 = document.createElement("p");
    t1.innerText = data[number+1].name;
    t1.id = "t1"
    let t2 = document.createElement("p");
    t2.innerText = data[number+1].price;
    t2.id = "t2"
    let t3 = document.createElement("p");
    t3.innerText = data[number+1].add_to_cart;
    t3.id = "t3"
    t3.addEventListener("click", () =>{
        saikatCartObjects.push(data[number]);
        localStorage.setItem("cartObjects",JSON.stringify(saikatCartObjects));
    })
    div2.append(img2,t1,t2,t3);
    


    let img3 = document.createElement("img");
    img3.src = data[number+2].image;
    let t4 = document.createElement("p");
    t4.innerText = data[number+2].name;
    t4.id = "t4"
    let t5 = document.createElement("p");
    t5.innerText = data[number+2].price;
    t5.id = "t5"
    let t6 = document.createElement("p");
    t6.innerText = data[number+2].add_to_cart;
    t6.id = "t6"
    t6.addEventListener("click", () =>{
        saikatCartObjects.push(data[number]);
        localStorage.setItem("cartObjects",JSON.stringify(saikatCartObjects));
    })
    div3.append(img3,t4,t5,t6);

    cont.append(div1, div2,div3)
    console.log(number)
}

copy()
let right = ()=>{
    number++;

if(number==data.length - 2){
    number = 0
 }
    copy();
}
let left = ()=> {
    number--;

if(number < 0){
    number = data.length-3;
}
    copy();
}



////////////////////////////////  4th part  ////////////////////////////




let data4 = [
    {
       image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1.png?v=1658907666",
       name:"Vitamin C Super Bright Foaming Face Wash | Vitamin C For",
       price: "Rs: 240.00",
       add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_1_1_e0123849-0a5d-4c37-9ef6-96ad3836c842.jpg?v=1660732568",
        name:"Cica + Niacinamide Face Sunscreen SPF 50 PA+++|",
        price: "Rs: 746.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask.png?v=1658907624",
        name:"20% Vitamin C Serum with Blood Orange & Ferulic Acid",
        price: "Rs: 963.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1.png?v=1658907926",
        name: "AHA BHA & Pineapple Foaming Face Wash | 5% Lactic",
        price: "Rs: 876.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2.png?v=1658906872",
        name:"Vitamin C + E Moisturizer With Sicilian Blood Orange",
        price: "Rs: 134.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2.png?v=1658907052",
        name: "CICA Niacinamide Night Gel  With Green Tea, Tea Tree",
        price: "Rs: 836.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1.jpg?v=1660731137",
        name: "Watermelon Super Glow Glycolic Toner With Lactic Acid",
        price: "Rs: 231.00",
        add_to_cart:"ADD TO CART"
    }
]


let number4 = 0;

let copy4 = ()=> {
    let cont4 = document.getElementById("copy4");
    cont4.innerHTML = null;
    let div41 = document.createElement("div");
    div41.id = "div41"
    let div42 = document.createElement("div");
    div42.id = "div42"
    let div43 = document.createElement("div");
    div43.id = "div43"



    let img41 = document.createElement("img");
    img41.src = data4[number4].image;
    let titel4 = document.createElement("p");
    titel4.innerText = data4[number4].name;
    titel4.id = "titel4"
    let titel14 = document.createElement("p");
    titel14.innerText = data4[number4].price;
    titel14.id = "titel14"
    let titel24 = document.createElement("p");
    titel24.innerText = data4[number4].add_to_cart;
    titel24.id = "titel24"
    titel24.addEventListener("click", () =>{
        saikatCartObjects.push(data[number]);
        localStorage.setItem("cartObjects",JSON.stringify(saikatCartObjects));
    })
    div41.append(img41,titel4,titel14,titel24);


    let img42 = document.createElement("img");
    img42.src = data4[number4+1].image;
    let t14 = document.createElement("p");
    t14.innerText = data4[number4+1].name;
    t14.id = "t14"
    let t24 = document.createElement("p");
    t24.innerText = data4[number4+1].price;
    t24.id = "t24"
    let t34 = document.createElement("p");
    t34.innerText = data4[number4+1].add_to_cart;
    t34.id = "t34"
    t34.addEventListener("click", () =>{
        saikatCartObjects.push(data[number]);
        localStorage.setItem("cartObjects",JSON.stringify(saikatCartObjects));
    })
    div42.append(img42,t14,t24,t34);
    


    let img43 = document.createElement("img");
    img43.src = data4[number4+2].image;
    let t44 = document.createElement("p");
    t44.innerText = data4[number4+2].name;
    t44.id = "t44"
    let t54 = document.createElement("p");
    t54.innerText = data4[number4+2].price;
    t54.id = "t54"
    let t64 = document.createElement("p");
    t64.innerText = data4[number4+2].add_to_cart;
    t64.id = "t64"
    t64.addEventListener("click", () =>{
        saikatCartObjects.push(data[number]);
        localStorage.setItem("cartObjects",JSON.stringify(saikatCartObjects));
    })
    div43.append(img43,t44,t54,t64);

    cont4.append(div41, div42,div43)
    console.log(number4)
}

copy4()
let right4 = ()=>{
    number4++;

if(number4==data4.length - 2){
    number4 = 0
 }
    copy4();
}
let left4 = ()=> {
    number4--;

if(number4 < 0){
    number4 = data4.length-3;
}
    copy4();
}


//            8th part 

let data8 = [
    {
       image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_25_1.jpg?v=1660731137",
       name:"Vitamin C + E Moisturizer With Sicilian Blood Orange ",
       del:"Rs: 595.00",
       price: "Rs: 565.00",
       add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2.png?v=1658906872",
        name:"Retinol  & Ceramide Age Defense Night Cream For Face",
        del:"Rs: 975.00",
        price: "Rs: 652.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_8124891e-d162-491c-b41e-43ea643926f1.png?v=1658906811",
        name:"CICA Niacinamide Night Gel  With Green Tea, Tea Tree Oil",
        del:"Rs: 965.00",
        price: "Rs: 765.00",
        add_to_cart:"ADD TO CART"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_1_1_e0123849-0a5d-4c37-9ef6-96ad3836c842.jpg?v=1660732568",
        name: "Vitamin C + E Moisturizer With Sicilian Blood Orange",
        del:"Rs: 795.00",
        price: "Rs: 536.00",
        add_to_cart:"ADD TO CART"
    }
]


let saikat_arr = ()=>{
    let cont = document.getElementById("eight_div");
    // cont.innerHTML = null;
    data8.forEach((el) => {
        let div = document.createElement("div");
        div.id = "same_div"
        let img =  document.createElement("img");
        img.src = el.image;
        let name = document.createElement("p");
        name.innerText = el.name;
        let del = document.createElement("del");
        del.innerText = el.del;
        let price = document.createElement("b");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = el.add_to_cart;
        btn.onclick = ()=>{
            addCart(el);

         
        } 
        div.append(img,name,del,price,btn);
        cont.append(div)
    });
}
saikat_arr()

let addCart = (el)=>{
    let productArr = JSON.parse(localStorage.getItem("cartObjects")) || [];
    productArr.push(el);
    localStorage.setItem("cartObjects", JSON.stringify(productArr))
}
