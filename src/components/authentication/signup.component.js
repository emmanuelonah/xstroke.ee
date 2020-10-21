///import utility function for api request here
window.addEventListener("DOMContentLoaded", (_) => {
    const modalDetails = {
        successModalContainer: "modal success--modal",
        errorModalContainer: "modal error--modal",
        errorModalImg: "https://i.ibb.co/K2K8fDd/error.png",
        successModalImg: "https://i.ibb.co/2511HCS/success.png",
        errorModalButtonClass: "okay--button error__button",
        successModalButtonClass: "okay--button success__ok",
        errorButtonText: "Go home",
        successButtonText: "Login",
        errorButtonNavigationLink: "/signup",
        successButtonNavigationLink: "/login",
        successModalH4Text: "Successful",
        errorModalH4Text: "Error",
        htmlBodyToInsertTheModalIn: document.querySelector("body"),
    };

    const form = document.querySelector(".signup--form");
    const RegExp = {
        user_avatar: / /,
        user_name: /^[a-z]{2,}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password: /^[\w@-]{8,20}$/i,
        estonian_id: /^[\d]{10}$/,
    };
    ///1...Work with Cookies and LocalStorage to Set user signup status
    ///2...modal function
    const messageModal = (
        modalClass,
        modalType,
        modalImg,
        modalButtonClass,
        successMessage,
        buttonText,
        buttonNavigationLink,
        htmlBodyToInsertTheModalIn
    ) => {
        ///div modal container
        const modalContainer = document.createElement("div");
        modalContainer.setAttribute("class", modalClass);

        ///div menuIcon wrapper
        const menuIconDiv = document.createElement("div");
        menuIconDiv.setAttribute("class", "menu--bar modal__menu__icon");

        ///span
        const menuSpan1 = document.createElement("span");
        menuSpan1.setAttribute("class", "top");

        ///span
        const menuSpan2 = document.createElement("span");
        menuSpan2.setAttribute("class", "bottom");

        ///append menu spans to menuIcon wrapper
        menuIconDiv.append(menuSpan1);
        menuIconDiv.append(menuSpan2);

        ///img
        const img = document.createElement("img");
        img.setAttribute("src", modalImg);
        img.setAttribute("alt", "");

        ///h4
        const h4 = document.createElement("h4");
        h4.textContent = modalType;

        // paragraph
        const p = document.createElement("p");
        p.textContent = successMessage;

        // button
        const button = document.createElement("button");
        button.setAttribute("class", modalButtonClass);
        button.textContent = buttonText;

        ///Append all elements to modalContainer
        modalContainer.append(menuIconDiv);
        modalContainer.append(img);
        modalContainer.append(h4);
        modalContainer.append(p);
        modalContainer.append(button);

        ///remove this element parent from the DOM when menuIconDiv is clicked
        menuIconDiv.addEventListener("click", (_) => {
            htmlBodyToInsertTheModalIn.removeChild(modalContainer);
        });

        ///click event on button
        button.addEventListener("click", (e) => {
            window.location.assign(buttonNavigationLink);
        });

        ///Insert the modal to the htmlBodyElement
        htmlBodyToInsertTheModalIn.insertBefore(
            modalContainer,
            htmlBodyToInsertTheModalIn.childNodes[0]
        );
    };

    ///3...form validation event
    form.addEventListener("keydown", (e) => {
        if (RegExp[e.target.name].test(e.target.value)) {
            e.target.style.borderBottomColor = "green";
        } else {
            e.target.style.borderBottomColor = "red";
        }
    });

    ///4...user signup function
    const signupUser = (_) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const signupData = {
                user_avatar: form.user_avatar.value,
                user_name: form.user_name.value,
                email: form.email.value,
                password: form.password.value,
                estonian_id: form.estonian_id.value,
            };

            ///firebase signup
            firebase
                .auth()
                .createUserWithEmailAndPassword(signupData.email, signupData.password)
                .then(() => {
                    window.localStorage.setItem("userLoggedInEmail", signupData.email);
                    messageModal(
                        modalDetails.successModalContainer,
                        modalDetails.successModalH4Text,
                        modalDetails.successModalImg,
                        modalDetails.successModalButtonClass,
                        `${signupData.email} have been successfully created`,
                        modalDetails.successButtonText,
                        modalDetails.successButtonNavigationLink,
                        modalDetails.htmlBodyToInsertTheModalIn
                    );

                    ///send user data to users table**document in firestore:::this is only ones
                    db.collection("users")
                        .add(signupData)
                        .then((res) => {
                            const userDocId = res.id;
                            window.localStorage.setItem("userDocId", userDocId);

                            console.log("New user successfully created");
                        })
                        .catch((err) => console.error(err));
                })
                .catch((error) => {
                    console.error("User not created", error);
                    messageModal(
                        modalDetails.errorModalContainer,
                        modalDetails.errorModalH4Text,
                        modalDetails.errorModalImg,
                        modalDetails.errorModalButtonClass,
                        `${signupData.email} was not created because ${errorMessage}`,
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
