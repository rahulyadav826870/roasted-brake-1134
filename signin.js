
  document.querySelector(".create-btn").addEventListener("click",myproductApp);
  let customerArr=JSON.parse(localStorage.getItem("customerData"))||[]
  function myproductApp(){
  event.preventDefault();
  let customerObj={
     cEmail:document.querySelector("#email").value,
     cPassword:document.querySelector("#password").value,
     
   };
  
   let flag=true;
   for(let i=0;i<customerArr.length;i++){
   if(customerArr[i].cEmail==customerObj.cEmail){
   flag=false;
       }
   }
   if(flag){
   customerArr.push(customerObj);
   localStorage.setItem("customerData",JSON.stringify(customerArr)); 
  
   }
   else{
   alert("Email Already Exit");

  
  }
  document.getElementById("first").value=""
  document.getElementById("last").value=""
  document.getElementById("email").value=""
  document.getElementById("password").value=""
   
//    window.location.href="#";
  }
      
