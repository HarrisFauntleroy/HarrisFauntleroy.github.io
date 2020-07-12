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

/* -------------------------------------------------------------------------------- */

/* Quick navigation active page */
function quickNav() {
  let current_location = location.pathname.split('/')[1];
  if (current_location === "") return;
  let menu_items = document.querySelector("nav").getElementsByTagName("a");
  for (let i = 0, len = menu_items.length; i < len; i++) {
    if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
      menu_items[i].className = "active";
    }
  }
}
quickNav()

/* Side navigation active page */
function sideNav() {
  let current_location = location.pathname.split('/')[1];
  if (current_location === "") return;
  let menu_items = document.querySelector("aside").getElementsByTagName("a");
  for (let i = 0, len = menu_items.length; i < len; i++) {
    if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
      menu_items[i].className = "active";
    }
  }
}
sideNav()