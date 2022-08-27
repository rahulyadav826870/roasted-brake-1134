
  document.querySelector(".create-btn").addEventListener("click",myproductApp);
  let customerArr=JSON.parse(localStorage.getItem("customerData"))||[]
  function myproductApp(){
    
    
  let first=document.querySelector("#firstname")
  let b=document.getElementById("last")
  let c=document.getElementById("email")
  let d=document.getElementById("password")
  if(firstname.value==""||b.value==""||c.value==""||d.value==""){
    alert("Enter All The Fields")
    return
  }
  if(!c.value.includes("@")){
    alert("Enter Valid Email")
    return
  }
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
   window.location.href="./login.html"
  
   }
   else{
   alert("Email Already Exit");

  
  }
 
  firstname.value="";
  b.value="";
  c.value="";
  d.value="";
   
 
  }
      
