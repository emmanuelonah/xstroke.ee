window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".estonian--id--login--form");

    //function to getUsers and check if Estonian id is a registered user
    const getUsers = (estonian_id) => {
        db.collection("users").onSnapshot((snapshot) => {
            snapshot.docChanges().filter((change) => {
                const data = change.doc.data();

                if (change.type === "added" && data.estonian_id === estonian_id) {
                    window.localStorage.setItem("userLoggedIn", true);
                    window.localStorage.setItem("userDocId", change.doc.id);
                    window.localStorage.setItem("userLoggedInEmail", data.email);
                    window.location.replace("/user-profile");
                }
            });
        });
    };
    getUsers();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const estonian_id = form.estonian_id.value;
        //perform api login operation here and then if successfully, take user to their respective profile
        try {
            getUsers(estonian_id);
        } catch (error) {
            window.alert("🚨 this user is not recognized or registered", error);
        }
    });

    //redirect user to email login form
    document.querySelector(".email__login").addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.assign("/login");
    });
});
