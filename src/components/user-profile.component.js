///update title tag to user name before
window.addEventListener("DOMContentLoaded", _ => {
  ///Do verfication
  const userLogInStatus = window.localStorage.getItem("userLoggedIn");
  console.log("Testing", userLogInStatus);
  if (userLogInStatus === "false" || !userLogInStatus) {
    window.location.replace("/login");
  }
});
