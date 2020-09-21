window.addEventListener("DOMContentLoaded", _ => {
  document.querySelector(".logout").addEventListener("click", _ => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        window.localStorage.removeItem("loggedInDetails");
        window.localStorage.setItem("userLoggedIn", false);
        // Sign-out successful.
        window.location.replace("/login");
      })
      .catch(function (error) {
        // An error happened.
        window.alert("Error Occured", error);
      });
  });
});
