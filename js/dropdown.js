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