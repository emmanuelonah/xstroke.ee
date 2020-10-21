window.addEventListener("DOMContentLoaded", (_) => {
    const _acceptTerms = window.localStorage.getItem("acceptTerms");
    const _userLoggedInStatus = window.localStorage.getItem("userLoggedIn");

    //Do verfication
    if (_acceptTerms !== "true" && _userLoggedInStatus !== "true") {
        window.location.replace("/terms");
    }
});
