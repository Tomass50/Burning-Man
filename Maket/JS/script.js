const burger = document.querySelector(".burger");
const burgerPanel = document.querySelector(".burger-panel");
console.log(burger);
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerPanel.classList.toggle("active");
});
const header = document.querySelector(".header");

console.log(header);
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset === 0) {
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
  }
});

const section1Body = document.querySelector(".section1-body");
const section1Button = document.querySelector(".section1-body button");
section1Body.addEventListener("click", (e) => {
  section1Button.classList.toggle("active");
});
console.log(section1Button);
