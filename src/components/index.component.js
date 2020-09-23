window.addEventListener("DOMContentLoaded", _ => {
  document.querySelector(".give__try").addEventListener("click", e => {
    const _acceptTerms = window.localStorage.getItem("acceptTerms");
    const _userLoggedInStatus = window.localStorage.getItem("userLoggedIn");

    if (_acceptTerms === "true" && (_userLoggedInStatus === "false") | undefined | _userLoggedInStatus) {
      window.location.replace("/login");
    } else if (_acceptTerms === "true" && _userLoggedInStatus === "true") {
      window.location.replace("/user-profile");
    } else {
      window.location.replace("/terms");
    }
  });
});
