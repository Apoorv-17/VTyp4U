var modal = document.getElementById('fade');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('fade1');
  window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
  }
function log(){
  document.getElementById("sbut1").classList.toggle("sbut-light");
  document.getElementById("sbut2").classList.toggle("sbut-light");
  document.getElementById("snav").classList.toggle("snav-light");
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("snav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}