window.addEventListener("DOMContentLoaded", () => {
    const _acceptBtn = document.querySelector(".accept__cookies__button");
    const _declineBtn = document.querySelector(".decline__cookies__button");
    const _cookiesWrapper = document.querySelector(".cookies--wrapper");

    const cookiesHandler = (_) => {
        if (window.localStorage.getItem("shouldSetCookies") === "true") {
            _cookiesWrapper.style.display = "none";
        } else {
            //   Acceptance Cookies
            _acceptBtn.addEventListener("click", (e) => {
                e.preventDefault();
                window.localStorage.setItem("shouldSetCookies", true);
                e.target.parentElement.parentElement.style.display = "none";
            });

            //   Decline Cookies
            _declineBtn.addEventListener("click", (e) => {
                window.localStorage.setItem("shouldSetCookies", false);
                e.target.parentElement.parentElement.style.display = "none";
            });
        }
    };
    cookiesHandler();
});
