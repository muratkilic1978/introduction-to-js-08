const showNumber = document.getElementById("showNumber");
const btnNumber = document.querySelector(".btnNumber");
btnNumber.addEventListener("click",function(){
    
    
   document.body.style.backgroundColor = "RGB("+Math.floor(Math.random() * 256) +","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
    
    showNumber.innerHTML = "RGB("+Math.floor(Math.random() * 256) +","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
});


