window.addEventListener("DOMContentLoaded", _ => {
  document.querySelector(".diagonise").addEventListener("click", _ => {
    window.location.assign("./diagnosis.component.html");
  });

  document.querySelector(".home").addEventListener("click", _ => {
    window.location.assign("./user-profile.component.html");
  });
});
