/* Desktop navigation sidebar */
var toggler = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".dropdown-content").classList.toggle("downlist");
    this.classList.toggle("dropdown-btn-down");
  });
}

/* Mobile navigation sidebar */
var toggler2 = document.getElementsByClassName("mobile-nav-btn");
var mobnav;

for (mobnav = 0; mobnav < toggler2.length; mobnav++) {
  toggler2[mobnav].addEventListener("click", function() {
    this.parentElement.querySelector(".side-nav-content").classList.toggle("downlist2");
  });
}