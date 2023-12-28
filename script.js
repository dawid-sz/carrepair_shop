// adding click function for #hamburger
document.getElementById('hamburger').addEventListener('click', navStatus);

// check if the navbar is open or closed
function navStatus() {
  if (document.body.classList.contains('hamburger-active')) {
   navClose();
 } 
 else {
   navOpen();
 }
}

// when the navbar get's closed then delete the class for 'open'
function navClose() {
  document.body.classList.remove('hamburger-active');
}

// when the navbar get's open, then delete the class for 'close'
function navOpen() {
  document.body.classList.add('hamburger-active');
}

// the toggle function for the hamburger button
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
  
    hamburgerMenu.addEventListener('click', function () {
      navbar.classList.toggle('show');
    });
  });
  