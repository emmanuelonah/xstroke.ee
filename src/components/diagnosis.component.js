import {
    bloodPressure,
    bodyMassIndex,
    cigarettesSmokedPerWeek,
    physicalActivity,
} from "./utils/diagnosis.js";

const form = document.querySelector(".stroke--diagnosis--form");
const time = document.querySelectorAll(".system--date");
const RegExp = {
    systolic: /^\d+(\.\d{0,})?$/,
    diastolic: /^\d+(\.\d{0,})?$/,
    height: /^\d+(\.\d{0,})?$/,
    weight: /^\d+(\.\d{0,})?$/,
    cigarettesSmoked: /^[\d]{0,}$/,
    hours: /^[\d]{0,}$/,
    minutes: /^[\d]{0,}$/,
};

const diagnoseResult = (
    cigarettesDiagnose,
    physicalActivityDiagnose,
    bodyMassIndexDiagnose,
    bloodPressureDiagnose
) => {
    let physicalActivityResult = "1.4 to 2.4h/week";
    let cigarreteResult = "";
    let massIndexResult = "25 to 29.99";

    let cigarretesMessage = `Decrease you cigarrete consumption to ${cigarreteResult}`;
    let physicalActivityMessage = `Increase your physical activity to ${physicalActivityResult}`;
    let bloodPressureMessage = `Decrease your blood pressure using agents prescribed by a doctor`;
    let massIndexMessage = `Decrease your body mass index to reach the target of ${massIndexResult}`;

    console.log("******Diagnosis Result Below*******");
    console.log("Cigarrets", cigarettesDiagnose);
    console.log("Physical activities", physicalActivityDiagnose);
    console.log("Body mass", bodyMassIndexDiagnose);
    window.location.assign("/instant-result");

    //check the cigarettesDianose and update the cigarreteResult
    switch (true) {
        case cigarettesDiagnose > 24:
            cigarreteResult = "13 - 12";
            break;

        case cigarettesDiagnose === 13 && cigarettesDiagnose <= 24:
            cigarreteResult = "7 - 6";
            break;

        case cigarettesDiagnose === 7 && cigarettesDiagnose <= 12:
            cigarreteResult = "1 - 0";
            break;

        case cigarettesDiagnose === 0:
            cigarretesMessage = "Please keep up the great work of zero cigarretes";
            break;

        default:
            cigarreteResult = "13 - 12";
    }

    //check the physicalActivitiesDiagnose and update the physicalActivityResult
    switch (true) {
        case physicalActivityDiagnose < 1:
            physicalActivityDiagnose = "1hr - 2hr:40mins";
            break;

        case physicalActivityDiagnose === 1 && physicalActivityDiagnose < 1.4:
            physicalActivityDiagnose = "1hr:40mins - 2hrs:40mins";
            break;

        case physicalActivityDiagnose === 1.4 && physicalActivityDiagnose < 2.4:
            physicalActivityMessage = "2hrs:40mins - 3hrs:50mins";
            break;

        case physicalActivityDiagnose === 2.4 && physicalActivityDiagnose < 3.4:
            physicalActivityDiagnose = "3hrs:50mins - more hours";
            break;

        case physicalActivityDiagnose >= 3.4:
            physicalActivityMessage =
                "Keep up the great work while you continue the regular diagnosis";
            break;

        default:
            physicalActivityMessage =
                "Keep up the great work while you continue the regular diagnosis";

            // check the bodyMassIndexDiagnose and update the massIndexMessage
            switch (true) {
                case bodyMassIndexDiagnose >= 35:
                    massIndexResult = "30 - 29.99";
                    break;

                case bodyMassIndexDiagnose === 30 && bloodPressureDiagnose <= 34.99:
                    massIndexResult = "25 - 24.99";
                    break;

                case bodyMassIndexDiagnose === 25 && bloodPressureDiagnose <= 29.99:
                    massIndexResult = "18.50";
                    break;

                case bodyMassIndexDiagnose === 18.5 && bloodPressureDiagnose <= 24.99:
                    massIndexMessage =
                        "Your mass index is perfect, keep up the good work while you continue your regular diagnosis";
                    break;

                case bodyMassIndexDiagnose < 18.5:
                    massIndexMessage = "Increase your body mass to 24.99 - 29.99";
                    break;

                default:
                    massIndexMessage = "Increase your body mass to 24.99 - 29.99";
            }
    }

    if (
        physicalActivityMessage.length &&
        bloodPressureMessage.length &&
        cigarretesMessage.length &&
        massIndexMessage.length
    ) {
        window.localStorage.setItem("physicalActivityMessage", physicalActivityMessage);
        window.localStorage.setItem("bloodPressureMessage", bloodPressureMessage);
        window.localStorage.setItem("cigarretesMessage", cigarretesMessage);
        window.localStorage.setItem("massIndexMessage", physicalActivityMessage);
    }
    //send to backend here
};

//*********************************************
//@submition() of diagnosis´ to db
//*********************************************
const diagnose = () => {
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

        const bloodPressureDiagnose = bloodPressure(
            _diagnosisFormValue.systolic,
            _diagnosisFormValue.diastolic
        );
        const cigarettesDiagnose = cigarettesSmokedPerWeek(_diagnosisFormValue.cigarettesSmoked);
        const physicalActivityDiagnose = physicalActivity(
            _diagnosisFormValue.hours,
            _diagnosisFormValue.minutes
        );
        const bodyMassIndexDiagnose = bodyMassIndex(
            _diagnosisFormValue.height,
            _diagnosisFormValue.weight
        );

        diagnoseResult(
            cigarettesDiagnose,
            physicalActivityDiagnose,
            bodyMassIndexDiagnose,
            bloodPressureDiagnose
        );
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

//*********************************************
//@update() The Date of the System
//*********************************************
time.forEach((time) => {
    time.textContent = new Date().getFullYear();
});
