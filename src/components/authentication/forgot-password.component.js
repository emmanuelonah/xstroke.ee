window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".forgot--password--form");

    ///redirect user to login if email button is clicked
    document.querySelector(".reset__password__email__button").addEventListener("click", (_) => {
        window.location.replace("/login");
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.email.value;

        ///Perform password api operation here
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(function () {
                // Email sent.
                console.log("Email Sent");
                window.alert("Check your email");
                form.reset();
            })
            .catch(function (error) {
                // An error happened.
                window.alert(error);
            });
    });
});
