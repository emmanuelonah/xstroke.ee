window.addEventListener("DOMContentLoaded", (_) => {
    const form = document.querySelector(".email--login--form");
    ///Work with Cookies and LocalStorage to Set user login status

    /*-----------------------------
    check log in status
    ------------------------------*/
    ///local state
    const state = {
        isUserLoggedIn: false,
    };
    const updateUserLogInState = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                state.isUserLoggedIn = true;
                window.localStorage.setItem("userLoggedIn", true);
                window.localStorage.setItem("uid", user.uid);
                window.localStorage.setItem("userLoggedInEmail", user.email);

                ///send user to their profile ones verified
                window.location.replace("/user-profile");
            } else {
                state.isUserLoggedIn = false;
            }
        });
    };

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
                updateUserLogInState();
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
