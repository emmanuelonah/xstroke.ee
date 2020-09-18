///import utility function for api request here

window.addEventListener("DOMContentLoaded", _ => {
  const form = document.querySelector(".signup--form");
  const RegExp = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/i,
    estonian_id: /^[\d]{10}$/,
  };
  ///Work with Cookies and LocalStorage to Set user signup status

  form.addEventListener("keydown", e => {
    if (RegExp[e.target.name].test(e.target.value)) {
      e.target.style.borderBottomColor = "green";

      ///Now attach submit DOM event to form
      form.addEventListener("submit", e => {
        e.preventDefault();

        const signupData = {
          email: form.email.value,
          password: form.password.value,
          estonian_id: form.estonian_id.value,
        };

        console.log("Data", signupData);
      });
    } else {
      e.target.style.borderBottomColor = "red";
    }
  });
});
