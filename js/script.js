const showNumber = document.getElementById("showNumber");
const btnNumber = document.querySelector(".btnNumber");
btnNumber.addEventListener("click",function(){
    
    let randomNumber = Math.floor((Math.random() * 100) +1);
    console.log(randomNumber);
    showNumber.innerHTML = randomNumber;
});



