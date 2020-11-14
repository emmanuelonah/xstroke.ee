window.addEventListener("DOMContentLoaded", (_) => {
    const _userMail = document.querySelector(".user--mail");
    const _userName = document.querySelector(".user--name");
    const _trpNumber = document.querySelector(".trp--number");
    const _userAvatar = document.querySelector(".user--profile");
    const _userProfileContainer = document.querySelector(".sidebar--wrapper");
    const _title = document.querySelector("title");
    const _userLoggedInMail = window.localStorage.getItem("userLoggedInEmail");
    const _userId = window.localStorage.getItem("userDocId");

    //******************************
    //update user details fn
    //*******************************
    const updateUserProfile = () => {
        db.collection("users")
            .where(firebase.firestore.FieldPath.documentId(), "==", _userId)
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    const data = change.doc.data();
                    console.log(data);
                    if (change.type === "added" && data.email.toString() === _userLoggedInMail.toString()) {
                        if (data.user_avatar) {
                            _userProfileContainer.setAttribute("data-id", change.doc.id);
                            window.localStorage.setItem("userDocId", change.doc.id);
                            _userAvatar.src = data.user_avatar;
                            _title.textContent = data.user_name;
                            _userMail.textContent = data.email;
                            _userName.textContent = data.user_name;
                            _trpNumber.textContent = data.estonian_id;
                        } else {
                            _userProfileContainer.setAttribute("data-id", change.doc.id);
                            window.localStorage.setItem("userDocId", change.doc.id);
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
