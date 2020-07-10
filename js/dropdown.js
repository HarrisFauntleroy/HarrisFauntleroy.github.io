var toggler = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".dropdown-content").classList.toggle("downlist");
    this.classList.toggle("dropdown-btn-down");
  });
}