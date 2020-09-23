window.addEventListener("DOMContentLoaded", _ => {
  document.querySelector(".logout").addEventListener("click", _ => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        window.localStorage.setItem("userLoggedIn", false);
        window.localStorage.removeItem("userLoggedInEmail");
        window.localStorage.removeItem("userLoggedInPassword");
        window.localStorage.removeItem("userLoggedInEstonianId");
        window.localStorage.removeItem("acceptTerms");
        window.location.replace("/login");
      })
      .catch(function (error) {
        window.alert("Error Occured", error);
      });
  });
});
