window.addEventListener("DOMContentLoaded", _ => {
  document.querySelector(".giver__try").addEventListener("click", e => {
    e.preventDefault();
    location.replace("/terms");
  });
});
