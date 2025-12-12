
document.getElementById("bbt").onclick=()=>{
   let shortWay= document.querySelector(".js");
   if(shortWay.innerHTML==="Hello from HTML")
   {
    shortWay.innerHTML="Good by from js";
   shortWay.style.color="black";
   }
   else{
    shortWay.innerHTML="Hello from HTML";
    shortWay.style.color="green";
   }
   

}
