///import utility function for api request here

window.addEventListener("DOMContentLoaded", _ => {
  const form = document.querySelector(".estonian--id--login--form");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const estonian_id_value = form.estonian_id.value;
    console.log(estonian_id_value);
    ///perform api login operation here and then if successfully, take user to their respective profile
  });

  ///redirect user to email login form
  document.querySelector(".email__login").addEventListener("click", e => {
    e.stopPropagation();
    e.preventDefault();
    window.location.assign("/login");
  });
});
