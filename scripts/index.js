
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