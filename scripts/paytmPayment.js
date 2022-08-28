document.getElementById("detail_cards")
    
   document.getElementById("crossicon").addEventListener("click" ,function(){
    let creditdebitbox=document.getElementById("detail_debitcardpay");
    detail_debitcardpay.style.display="none"
   })
   document.getElementById("detail_cards").addEventListener("click",function(){
       let creditdebitbox=document.getElementById("detail_debitcardpay");
   
        detail_debitcardpay.style.display="block"
   
   })

   document.getElementById("detail_backarrow").addEventListener("click" ,function(){
       let canclediv =document.getElementById("detail_cancle");
       detail_cancle.style.display="block"
   })
   detail.append(detail_debitcardpay,detail_cancle)

   function paymentbutton(){
     let cardvalue=document.getElementById("card_number").value.toString();
     let cvvvalue=document.getElementById("cvv").value.toString();
     if(cardvalue.length==0 && cvvvalue.length==0){
         alert("All fields are mandatory")
     }else{
         window.location.href="orderPlaced.html"
     }
   }