window.addEventListener("DOMContentLoaded", _ => {
  document.querySelector(".menu--bar").addEventListener("click", e => {
    e.stopPropagation();
    document.querySelector(".menu--items").classList.toggle("menu--items--displayer");
  });
});
