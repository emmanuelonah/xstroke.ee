window.addEventListener("DOMContentLoaded", _ => {
  const time = document.querySelectorAll(".system--date");
  ///Update The Date of the System
  time.forEach(time => {
    time.textContent = new Date().getFullYear();
  });
});
