import { genericModal } from "../../components/modal/generic.modal.js";
import { modalDetails } from "../utils/modal.setup.js";

console.log(genericModal);
window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".signup--form");
    const RegExp = {
        user_avatar: / /,
        user_name: /^[a-z]{2,}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password: /^[\w@-]{8,20}$/i,
        estonian_id: /^[\d]{10}$/,
    };

    //******************************************
    //@DOMevent() keydown for input validation
    //******************************************
    form.addEventListener("keydown", (e) => {
        if (RegExp[e.target.name].test(e.target.value)) {
            e.target.style.borderBottomColor = "green";
        } else {
            e.target.style.borderBottomColor = "red";
        }
    });

    //******************************************
    //@function() signupUser for signup
    //******************************************
    const signupUser = () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const signupData = {
                user_avatar: form.user_avatar.value,
                user_name: form.user_name.value,
                email: form.email.value,
                password: form.password.value,
                estonian_id: form.estonian_id.value,
            };

            firebase
                .auth()
                .createUserWithEmailAndPassword(signupData.email, signupData.password)
                .then(() => {
                    window.localStorage.setItem("userLoggedInEmail", signupData.email);
                    genericModal(
                        modalDetails.successModalContainer,
                        modalDetails.successModalH4Text,
                        modalDetails.successModalImg,
                        modalDetails.successModalButtonClass,
                        `${signupData.email} have been successfully created`,
                        modalDetails.successButtonText,
                        modalDetails.successButtonNavigationLink,
                        modalDetails.htmlBodyToInsertTheModalIn
                    );

                    //******************************************
                    //@firestore() add user to user table in db
                    //******************************************
                    db.collection("users")
                        .add(signupData)
                        .then((res) => {
                            const userDocId = res.id;
                            window.localStorage.setItem("userDocId", userDocId);
                        })
                        .catch((err) => console.error(err));
                })
                .catch((error) => {
                    genericModal(
                        modalDetails.errorModalContainer,
                        modalDetails.errorModalH4Text,
                        modalDetails.errorModalImg,
                        modalDetails.errorModalButtonClass,
                        `${signupData.email} was not created because ${error.message}`,
                        modalDetails.errorButtonText,
                        modalDetails.errorButtonNavigationLink,
                        modalDetails.htmlBodyToInsertTheModalIn
                    );
                });

            e.target.reset();
        });
    };
    signupUser();
});
