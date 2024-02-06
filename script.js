//tab gallery change pictures after click on button
function openImage(evt, imageName) {
  var i, galleryImg, tablinks, overlays;
  galleryImg = document.getElementsByClassName("gallery-img");
  overlays = document.getElementsByClassName("overlay");
  for (i = 0; i < galleryImg.length; i++) {
    galleryImg[i].style.display = "none";
    overlays[i].classList.remove("show");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(imageName).style.display = "block";
  document.getElementById("overlay" + imageName.slice(3)).classList.add("show");
  evt.currentTarget.className += " active";
}

//collapse button for datenschutz section
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//navbar hamburger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  if (menu.classList.contains("slide-up")) {
    menu.classList.remove("slide-up");
    menu.classList.add("slide-down");
  } else {
    menu.classList.remove("slide-down");
    menu.classList.add("slide-up");
  }
});

//change the mehranzeigen text to wenigeranzeigen
let button = document.querySelector("#datenbtn");

let initialText = "Mehranzeigen";
let alternateText = "Wenigeranzeigen";

button.addEventListener("click", function () {
  if (button.textContent === alternateText) {
    button.textContent = initialText;
  } else {
    button.textContent = alternateText;
  }
});
