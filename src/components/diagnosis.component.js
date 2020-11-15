import { bloodPressure, bodyMassIndex, cigarettesSmokedPerWeek, physicalActivity } from "./utils/diagnosis.js";
import { _strokeLevel } from "./utils/stroke-level.js";
import { testHistoryCollection } from "../data/collections.js";

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

const diagnoseResult = (cigarettesDiagnose, physicalActivityDiagnose, bodyMassIndexDiagnose, bloodPressureDiagnose) => {
    const sumDiagnosis = cigarettesDiagnose + physicalActivityDiagnose + bodyMassIndexDiagnose + bloodPressureDiagnose;
    const strokeLevel = _strokeLevel(sumDiagnosis);

    _strokeLevel(sumDiagnosis);

    let cigarreteResult = "";
    let physicalActivityResult = "";
    let massIndexResult = "";
    let bloodPressureResult = "";

    let cigarretesReMessage = "";
    let physicalActivityReMessage = "";
    let massIndexReMessage = "";

    //check the cigarettesDianose and update the cigarreteResult
    switch (true) {
        case cigarettesDiagnose === 4:
            cigarreteResult = "13 - 12";
            break;

        case cigarettesDiagnose === 3:
            cigarreteResult = "7 - 6";
            break;

        case cigarettesDiagnose === 2:
            cigarreteResult = "6 - 0";
            break;

        case cigarettesDiagnose === 1:
            cigarreteResult = "1 - 0";
            break;

        case cigarettesDiagnose === 0:
            cigarretesReMessage = "Please keep up the great work of zero cigarretes";
            break;

        default:
            cigarretesReMessage = "Please keep up the great work of zero cigarretes";
    }

    //check the physicalActivitiesDiagnose and update the physicalActivityResult
    switch (true) {
        case physicalActivityDiagnose === 4:
            physicalActivityResult = "1hr - 2hr:40mins";
            break;

        case physicalActivityDiagnose === 3:
            physicalActivityResult = "1hr:40mins - 2hrs:40mins";
            break;

        case physicalActivityDiagnose === 2:
            physicalActivityResult = "2hrs:40mins - 3hrs:50mins";
            break;

        case physicalActivityDiagnose === 1:
            physicalActivityResult = "3hrs:50mins - if possible more hours";
            break;

        case physicalActivityDiagnose === 0:
            physicalActivityReMessage = "Keep up the great work while you continue the regular diagnosis";
            break;

        default:
            physicalActivityResult = "1hr - 2hr:40mins";
    }

    // check the bodyMassIndexDiagnose and update the massIndexMessage
    switch (true) {
        case bodyMassIndexDiagnose === 3:
            massIndexResult = "30 - 29.99";
            break;

        case bodyMassIndexDiagnose === 2:
            massIndexResult = "25 - 24.99";
            break;

        case bodyMassIndexDiagnose === 1:
            massIndexResult = "18.50";
            break;

        case bodyMassIndexDiagnose === 0:
            massIndexReMessage = "Your mass index is perfect, keep up the good work while you continue your regular diagnosis";
            break;

        case bodyMassIndexDiagnose === -1:
            massIndexResult = "24.99 - 29.99";
            break;

        default:
            massIndexMessage = "24.99 - 29.99";
    }

    let cigarretesMessage = cigarretesReMessage.length ? cigarretesReMessage : `Decrease your cigarrete consumption to ${cigarreteResult.length ? cigarreteResult : ""}`;
    let physicalActivityMessage = physicalActivityReMessage ? physicalActivityReMessage : `Increase your physical activity to ${physicalActivityResult.length ? physicalActivityResult : ""}`;
    let massIndexMessage = massIndexReMessage ? massIndexReMessage : `Decrease your body mass index to reach the target of ${massIndexResult.length ? massIndexResult : ""}`;
    let bloodPressureMessage = `Decrease your blood pressure using agents prescribed by a doctor`;

    if (physicalActivityMessage.length && bloodPressureMessage.length && cigarretesMessage.length && massIndexMessage.length) {
        window.localStorage.setItem("cigarretesMessage", cigarretesMessage);
        window.localStorage.setItem("physicalActivityMessage", physicalActivityMessage);
        window.localStorage.setItem("massIndexMessage", massIndexMessage);
        window.localStorage.setItem("bloodPressureMessage", bloodPressureMessage);
    } else {
        window.alert("Unexpected error occured");
    }
    //send history to backend
    const diagnoseHistory = {
        cigarreteMsg: cigarretesMessage,
        physicalActivitiesMsg: physicalActivityMessage,
        massIndexMsg: massIndexMessage,
        bloodPressureMsg: bloodPressureMessage,
        date: new Date().toLocaleString(),
        strokeLevel,
    };

    /*
    db.collection(testHistoryCollection)
        .add(diagnoseHistory)
        .then(() => {
            console.log("Successfully Posted");
            window.location.assign("/instant-result");
        })
        .catch((error) => {
            window.alert("Error trying to save test history");
            console.log(error);
        });
        */
};

//*********************************************
//@submit()diagnose to db
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
        const bloodPressureDiagnose = bloodPressure(_diagnosisFormValue.systolic, _diagnosisFormValue.diastolic);
        const cigarettesDiagnose = cigarettesSmokedPerWeek(_diagnosisFormValue.cigarettesSmoked);
        const physicalActivityDiagnose = physicalActivity(_diagnosisFormValue.hours, _diagnosisFormValue.minutes);
        const bodyMassIndexDiagnose = bodyMassIndex(_diagnosisFormValue.height, _diagnosisFormValue.weight);
        diagnoseResult(cigarettesDiagnose, physicalActivityDiagnose, bodyMassIndexDiagnose, bloodPressureDiagnose);
        e.target.reset();

        console.log("BP", bloodPressureDiagnose);
        console.log("Cg", cigarettesDiagnose);
        console.log("PA", physicalActivityDiagnose);
        console.log("BM", bloodPressureDiagnose);
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
time.forEach((time) => {
    time.textContent = new Date().getFullYear();
});
