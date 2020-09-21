window.addEventListener("DOMContentLoaded", _ => {
    ///Do verfication
    const userLoggedIn = window.localStorage.getItem("userLoggedIn");
    if (userLoggedIn === "false" || !userLoggedIn) {
      window.location.replace("/login");
    }
  });
  