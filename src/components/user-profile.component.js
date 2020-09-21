///update title tag to user name before
window.addEventListener("DOMContentLoaded", _ => {
  ///Do verfication
  const userLoggedIn = window.localStorage.getItem("userLoggedIn");
  console.log("Testing", userLogInStatus);
  if (userLoggedIn === "false" || !userLoggedIn) {
    window.location.replace("/login");
  }
});
