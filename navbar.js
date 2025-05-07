let burger = document.getElementsByClassName("menu-button")[0];
burger.addEventListener("click", openmenu);

function openmenu(event) {
  let leftMenu = document.getElementsByClassName("left-nav")[0];

  leftMenu.style.visibility = "visible";
}

let closebutton = document.getElementsByClassName("closebutton")[0];
closebutton.addEventListener("click", closemenu);

function closemenu(event) {
  let leftMenu = document.getElementsByClassName("left-nav")[0];

  leftMenu.style.visibility = "hidden";
}
