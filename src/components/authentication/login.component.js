window.addEventListener("DOMContentLoaded", (_) => {
    const form = document.querySelector(".email--login--form");
    ///Work with Cookies and LocalStorage to Set user login status

    ///api login operation
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginData = {
            email: form.email.value,
            password: form.password.value,
        };

        firebase
            .auth()
            .signInWithEmailAndPassword(loginData.email, loginData.password)
            .then(() => {
                window.localStorage.setItem("userLoggedIn", true);
                window.localStorage.setItem("userLoggedInEmail", loginData.email);
                window.location.replace("/user-profile");
            })
            .catch((err) => {
                window.alert(err);
            });
    });
    ///redirect user to email login form
    document.querySelector(".estonian__id").addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.assign("/estonian-id-login");
    });
});
