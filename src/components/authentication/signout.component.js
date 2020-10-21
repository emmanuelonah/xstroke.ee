window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".logout").addEventListener("click", () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                // window.localStorage.clear();
                window.localStorage.removeItem("userLoggedIn");
                window.localStorage.removeItem("uid");
                window.localStorage.removeItem("userLoggedInEmail");
                window.location.replace("/login");
            })
            .catch((error) => {
                window.alert("Error Occured", error);
            });
    });
});
