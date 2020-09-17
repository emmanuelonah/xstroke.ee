/***********************************************
 *
 *
 *
 *
 *
 *
 *
 *
 **********************************************/

window.addEventListener("DOMContentLoaded", _ => {
  const form = document.querySelector(".stroke--diagnosis--form");
  const time = document.querySelectorAll(".system--date");

  ///Update The Date of the System
  time.forEach(time => {
    time.textContent = new Date().getFullYear();
  });

  document.querySelector(".menu--bar").addEventListener("click", _ => {
    document.querySelector(".menu--items").classList.toggle("menu--items--displayer");
  });

  ///submit diagnosis to backend
  form.addEventListener("submit", e => {
    e.preventDefault();

    const _diagnosisFormValue = {
      systolic: Number(form.systolic.value),
      diastolic: Number(form.diastolic.value),
      height: Number(form.height.value),
      weight: Number(form.weight.value),
      "cigarettes-smoked": Number(form.cigarettesSmoked.value),
      hours: Number(form.hours.value),
      minutes: Number(form.minutes.value),
    };

    console.log(_diagnosisFormValue);
    window.location.assign("./instant-result.component.html");
    form.reset();
  });
});
