let burger = document.getElementsByClassName("menu-button")[0];
burger.addEventListener("click", openmenu);

function openmenu(event) {
  let leftMenu = document.getElementsByClassName("left-nav")[0];

  leftMenu.style.display = "block";
}
