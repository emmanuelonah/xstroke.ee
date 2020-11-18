window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".estonian--id--login--form");

    //function to getUser and check if Estonian id is a registered user, if so then take user to their profile
    const getUsers = (estonian_id) => {
        db.collection("users").onSnapshot((snapshot) => {
            snapshot.docChanges().filter((change) => {
                const data = change.doc.data();

                if (change.type === "added" && data.estonian_id === estonian_id) {
                    window.localStorage.setItem("userLoggedIn", true);
                    window.localStorage.setItem("userDocId", change.doc.id);
                    window.localStorage.setItem("userLoggedInEmail", data.email);
                    window.location.replace("/user-profile");
                } else if (data.estonian_id !== estonian_id) {
                    window.alert("🚨 this user is not recognized or registered");
                }
            });
        });
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const estonian_id = form.estonian_id.value;
        getUsers(estonian_id);
        e.target.reset();
    });

    document.querySelector(".email__login").addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.assign("/login");
    });
});
