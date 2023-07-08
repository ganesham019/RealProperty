const burgerBtn = document.getElementById("burger_btn");
const navSec = document.getElementById("nav_right_sec");

burgerBtn.addEventListener('click',function(){
    navSec.classList.toggle("open");
    burgerBtn.classList.toggle("open");
})

