window.addEventListener("DOMContentLoaded", _ => {
  const _acceptTerms = window.localStorage.getItem("acceptTerms");
  const _userLoggedInStatus = window.localStorage.getItem("userLoggedIn");

  ///Do verfication
  if (_acceptTerms === "true" && (_userLoggedInStatus === "false") | undefined | _userLoggedInStatus) {
    window.location.replace("/login");
  } else if (__filename === "true" && _userLoggedInStatus === "true") {
    window.location.replace("/user-profile");
  } else {
    window.location.replace("/terms");
  }
});
