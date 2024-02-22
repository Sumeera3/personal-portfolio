document.getElementById("About_para");
document.getElementById("btn2");
document.getElementById("btn1");
var typed = new Typed("#element", {
  strings: [
    "<i><strong>WEB DESIGNER</strong><i>",
    "<i><strong>WEB DEVELOPER</strong><i>",
  ],
  typeSpeed: 50,
});
function about() {
  if (About_para.style.display !== "flex") {
    About_para.style.display = "flex";
    btn1.innerText = "Close";
  } else {
    About_para.style.display = "none";
    btn1.innerText = "About Me";
    clicked = true;
  }
}
