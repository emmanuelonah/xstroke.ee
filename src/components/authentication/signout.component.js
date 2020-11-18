window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".logout").addEventListener("click", () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                window.localStorage.clear();
                window.location.replace("/login");
            })
            .catch((error) => {
                window.alert("Error Occured", error);
            });
    });
});
