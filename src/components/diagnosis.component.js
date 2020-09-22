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

  const RegExp = {
    systolic: /^[\d]{0,}$/,
    diastolic: /^[\d]{0,}$/,
    height: /^[\d]{0,}$/,
    weight: /^[\d]{0,}$/,
    cigarettesSmoked: /^[\d]{0,}$/,
    hours: /^[\d]{0,}$/,
    minutes: /^[\d]{0,}$/,
  };

  ///Update The Date of the System
  time.forEach(time => {
    time.textContent = new Date().getFullYear();
  });

  ///submit diagnosis to backend
  const sendDiagonosisToBackend = _ => {
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

      ///API operation here
      ///Should show user the result if user clicks ok button
      window.location.assign("/instant-result");
      form.reset();
    });
  };

  ///form input verification
  form.addEventListener("keydown", e => {
    console.log(e.target.value);
    if (RegExp[e.target.name].test(e.target.value)) {
      e.target.classList.remove("failed__regexp");
      e.target.classList.add("passed__regexp");

      ///invoke sendDiagonosisToBackend
      sendDiagonosisToBackend();
    } else {
      e.target.classList.remove("passed__regexp");
      e.target.classList.add("failed__regexp");
    }
  });
});
