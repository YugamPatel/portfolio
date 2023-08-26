var sidemenu = document.getElementById("sidemenu");
var headerText = document.querySelector(".header-text");
var headerText1 = document.querySelector(".h1");
function openmenu() {
  // sidemenu.style.right = "0px";
  sidemenu.style.transform = "translateX(56vw)";
  headerText.classList.toggle("header-text-shifted");
  headerText1.classList.toggle("header-text-shifted");
}
function closemenu() {
  // sidemenu.style.right = "-200px";
  sidemenu.style.transform = "translateX(120vw)"; 
  headerText.classList.remove("header-text-shifted");
  headerText1.classList.remove("header-text-shifted");
}
