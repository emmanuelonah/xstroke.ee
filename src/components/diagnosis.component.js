import {
    bloodPressure,
    bodyMassIndex,
    cigarettesSmokedPerWeek,
    physicalActivity,
} from "./utils/diagnosis.js";

window.addEventListener("DOMContentLoaded", () => {
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

    //*********************************************
    //@update() The Date of the System
    //*********************************************
    time.forEach((time) => {
        time.textContent = new Date().getFullYear();
    });

    //*********************************************
    //@submition() of diagnosis to db function
    //*********************************************
    const diagnose = (_) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const _diagnosisFormValue = {
                systolic: Number(e.target.systolic.value),
                diastolic: Number(e.target.diastolic.value),
                height: Number(e.target.height.value),
                weight: Number(e.target.weight.value),
                cigarettesSmoked: Number(e.target.cigarettesSmoked.value),
                hours: Number(e.target.hours.value),
                minutes: Number(e.target.minutes.value),
            };

            /*********************************************
             * @function()bloodPressure @execute,
             * @function()cigarettesSmokedPerWeek @execute,
             * @function()physicalActivity @execute,
             * @function()bodyMassIndex @execute,
             *********************************************/

            bloodPressure(_diagnosisFormValue.systolic, _diagnosisFormValue.diastolic);
            cigarettesSmokedPerWeek(_diagnosisFormValue.cigarettesSmoked);
            physicalActivity(_diagnosisFormValue.hours, _diagnosisFormValue.minutes);
            bodyMassIndex(_diagnosisFormValue.height, _diagnosisFormValue.weight);
            //window.location.assign("/instant-result");
            e.target.reset();
        });
    };
    diagnose();

    //*********************************************
    //@validation() form input validation
    //*********************************************
    form.addEventListener("keydown", (e) => {
        if (RegExp[e.target.name].test(e.target.value)) {
            e.target.classList.remove("failed__regexp");
            e.target.classList.add("passed__regexp");
        } else {
            e.target.classList.remove("passed__regexp");
            e.target.classList.add("failed__regexp");
        }
    });
});
