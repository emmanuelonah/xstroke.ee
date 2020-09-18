window.addEventListener("DOMContentLoaded", _ => {
  document.querySelector(".diagonise").addEventListener("click", _ => {
    window.location.assign("/diagnosis");
  });

  document.querySelector(".home").addEventListener("click", _ => {
    window.location.assign("/user-profile");
  });
});
