const mobile = document.getElementById("mobile");
const tablet = document.getElementById("tablet");
const tables1 = document.querySelector(".tables1");
const tables2 = document.querySelector(".tables2");
const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const phone = document.getElementById("phone");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".close__menu");
mobile.addEventListener("click", (e) => {
  tables1.parentElement.classList.toggle("active1");
});
tablet.addEventListener("click", (e) => {
  tables2.parentElement.classList.toggle("active2");
});

close1.addEventListener("click", () => {
  tables1.parentElement.classList.remove("active1");
});
close2.addEventListener("click", () => {
  tables2.parentElement.classList.remove("active2");
});

phone.addEventListener("click", () => {
  phone.parentNode.classList.toggle("phone");
});

menu.addEventListener("click", () => {
  menu.parentNode.parentElement.parentElement.classList.toggle("menu");
});
menuClose.addEventListener("click", () => {
  menu.parentNode.parentElement.parentElement.classList.remove("menu");
});
