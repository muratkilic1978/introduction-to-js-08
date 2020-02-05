const showNumber = document.getElementById("showNumber");
const btnNumber = document.querySelector(".btnNumber");
btnNumber.addEventListener("click",function(){
    
    let randomNumberR =  Math.floor(Math.random() * 256);
    console.log(randomNumberR);
    let randomNumberG =  Math.floor(Math.random() * 256);
    console.log(randomNumberG);
    let randomNumberB =  Math.floor(Math.random() * 256);
    console.log(randomNumberB);
    
    document.body.style.backgroundColor = "RGB("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
    
    showNumber.innerHTML = "RGB("+randomNumberR+","+randomNumberG+","+randomNumberB+")";
});


