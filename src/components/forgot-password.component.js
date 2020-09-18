window.addEventListener("DOMContentLoaded", _ => {
  const form = document.querySelector(".forgot--password--form");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email_value = form.email.value;

    console.log(email_value);
    ///Perform api operation here
  });
});
