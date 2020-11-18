window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".email--login--form");

    const state = {
        isUserLoggedIn: false,
    };
    const updateUserLogInState = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user && window.localStorage.getItem("userDocId")) {
                state.isUserLoggedIn = true;
                window.localStorage.setItem("userLoggedIn", state.isUserLoggedIn);
                window.localStorage.setItem("uid", user.uid);
                window.localStorage.setItem("userLoggedInEmail", user.email);

                //send user to their profile ones verified
                window.location.replace("/user-profile");
            } else {
                state.isUserLoggedIn = false;
                window.localStorage.setItem("userLoggedIn", state.isUserLoggedIn);
            }
        });
    };

    //api login operation
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
                db.collection("users")
                    .where("email", "==", loginData.email)
                    .get()
                    .then((res) => {
                        res.forEach((doc) => {
                            window.localStorage.setItem("userDocId", doc.id);
                            updateUserLogInState();
                        });
                    });
            })
            .catch((err) => {
                window.alert(err);
            });
    });
    //redirect user to email login form
    document.querySelector(".estonian__id").addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.assign("/estonian-id-login");
    });
});
