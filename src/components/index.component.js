window.addEventListener("DOMContentLoaded", (_) => {
    document.querySelector("#proceed").addEventListener("click", () => {
        const _acceptTerms = window.localStorage.getItem("acceptTerms");
        const _userLoggedInStatus = window.localStorage.getItem("userLoggedIn");

        console.log(_acceptTerms);
        if (_acceptTerms === "true" && (_userLoggedInStatus === "false") | undefined) {
            window.location.replace("/login");
        } else if (_acceptTerms === "true" && _userLoggedInStatus === "true") {
            window.location.assign("/user-profile");
        } else {
            window.location.assign("/terms");
        }
    });
});
