// Navbar Start//


document.querySelector("#login-btn").addEventListener("click",loginApp);
  let loginArr=JSON.parse(localStorage.getItem("customerData"))||[]

  function loginApp(){
    
    
  let loginData={
     cEmail:document.querySelector("#email").value,
     cPassword:document.querySelector("#password").value,
     
   };
  
   let flag=false;
   for(let i=0;i<loginArr.length;i++){
   if(loginArr[i].cEmail==loginData.cEmail && loginArr[i].cPassword==loginData.cPassword){
   flag=true;
       }
   }
   if(flag){
  alert("Log In Sucessfully");
  localStorage.setItem("system","online")
  window.location.href="../index,html"
  
   }
   else{
   alert("Invalid Email Id or Password");
   window.location.reload()
  }
 
  }