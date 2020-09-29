///import utility function for api request here
window.addEventListener("DOMContentLoaded", _ => {
  const form = document.querySelector(".signup--form");
  const RegExp = {
    user_name: /^[a-z]{2,}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/i,
    estonian_id: /^[\d]{10}$/,
  };

  ///1...form verification
  form.addEventListener("keydown", e => {
    if (RegExp[e.target.name].test(e.target.value)) {
      e.target.style.borderBottomColor = "green";
    } else {
      e.target.style.borderBottomColor = "red";
    }
  });

  ///2...user signup function
  const signupUser = _ => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const signupData = {
        user_name: form.user_name.value,
        email: form.email.value,
        password: form.password.value,
        estonian_id: form.estonian_id.value,
      };

      ///its your choice to use RegExp to test the value again before send it to backend
      ///Below is simply how to test it again,note i did not borther to test this second validation but i belief it should work for you
      const { user_name, email, password, estonian_id } = signupData;
      if (RegExp.user_name.test(user_name) && RegExp.email.test(email) && RegExp.password.test(password) && RegExp.estonian_id.test(estonian_id)) {
        ///ajax call here to send data to backend or possibly api utility func/method
        /// send the signupData object to the backend
      } else {
        ///Best place to invoke error modal
      }
    });
  };
  signupUser();
});
