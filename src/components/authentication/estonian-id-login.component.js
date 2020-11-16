window.addEventListener("DOMContentLoaded", (_) => {
    const form = document.querySelector(".estonian--id--login--form");

    //function to getUsers and check if Estonian id is a registered user
    const getUsers = (estonian_id) => {
        db.collection("users").onSnapshot((snapshot) => {
            snapshot.docChanges().filter((change) => {
                const data = change.doc.data();

                if (change.type === "added" && data.estonian_id === estonian_id) {
                    window.localStorage.setItem("userLoggedIn", true);
                    window.location.replace("/user-profile");
                } else {
                    window.alert("🚨 this user is not recognized or registered");
                }
            });
        });
    };
    getUsers();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const estonian_id = form.estonian_id.value;
        //perform api login operation here and then if successfully, take user to their respective profile
        getUsers(estonian_id);
    });

    //redirect user to email login form
    document.querySelector(".email__login").addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.assign("/login");
    });
});
