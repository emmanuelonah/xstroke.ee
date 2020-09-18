window.addEventListener("DOMContentLoaded", _ => {
  const form = document.querySelector(".email--login--form");
  ///Work with Cookies and LocalStorage to Set user login status

  ///api login operation
  form.addEventListener("submit", e => {
    e.preventDefault();
    const loginData = {
      email: form.email.value,
      password: form.password.value,
    };

    console.log(loginData);

    ///perform api login operation here and then if successfully, take user to their respective profile
  });
  ///redirect user to email login form
  document.querySelector(".estonian__id").addEventListener("click", e => {
    e.stopPropagation();
    e.preventDefault();
    window.location.assign("/estonian-id-login");
  });
});
