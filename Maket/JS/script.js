const burger = document.querySelector('.burger');
const burgerPanel = document.querySelector(".burger-panel");
console.log(burger);
burger.addEventListener("click",() =>{
    burger.classList.toggle("active")
    burgerPanel.classList.toggle("active")
})