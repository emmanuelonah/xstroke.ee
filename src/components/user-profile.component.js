///update title tag to user name before
window.addEventListener("DOMContentLoaded", (_) => {
    const _userMail = document.querySelector(".user--mail");
    const _userName = document.querySelector(".user--name");
    const _trpNumber = document.querySelector(".trp--number");
    const _userAvatar = document.querySelector(".user--profile");
    const _title = document.querySelector("title");
    const _userLoggedInMail = window.localStorage.getItem("userLoggedInEmail");

    /*-----------------------------
     update user details fn
    -------------------------------*/
    const updateUserProfile = () => {
        db.collection("users")
            .orderBy("email")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    const data = change.doc.data();
                    if (
                        change.type === "added" &&
                        data.email.toString() === _userLoggedInMail.toString()
                    ) {
                        if (data.user_avatar) {
                            _userAvatar.src = data.user_avatar;
                            _title.textContent = data.user_name;
                            _userMail.textContent = data.email;
                            _userName.textContent = data.user_name;
                            _trpNumber.textContent = data.estonian_id;
                        } else {
                            _title.textContent = data.user_name;
                            _userMail.textContent = data.email;
                            _userName.textContent = data.user_name;
                            _trpNumber.textContent = data.estonian_id;
                        }
                    }
                });
            });
    };
    updateUserProfile();
});
