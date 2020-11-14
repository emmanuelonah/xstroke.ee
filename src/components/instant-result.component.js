const instantResultContainer = document.querySelector(".instant-result-container");
const actualStrokeLevelContainer = document.querySelector(".actual-stroke-level-container");
const strokeLevel = Number(window.localStorage.getItem("strokeLevel"));

//**************************************
//instant result renderer fn
//**************************************
const renderInstantResult = () => {
    let physicalActivityMessage;
    let bloodPressureMessage;
    let cigarretesMessage;
    let massIndexMessage;

    if (window.localStorage.getItem("physicalActivityMessage") !== null || undefined || "") {
        physicalActivityMessage = window.localStorage.getItem("physicalActivityMessage");
        bloodPressureMessage = window.localStorage.getItem("bloodPressureMessage");
        cigarretesMessage = window.localStorage.getItem("cigarretesMessage");
        massIndexMessage = window.localStorage.getItem("massIndexMessage");
    }
    console.log(physicalActivityMessage, bloodPressureMessage, cigarretesMessage, massIndexMessage);

    // hook result to ui
    const instantResultTemplate = `
    <li class="physical-activities">Your physical activities: ${physicalActivityMessage}</li>
    <li class="blood-pressure">Your blood pressure: ${bloodPressureMessage}</li>
    <li class="cigarrete">Your cigarrete status: ${cigarretesMessage}</li>
    <li class="mass-index">Your mass index: ${massIndexMessage}</li>
    `;

    instantResultContainer.innerHTML += instantResultTemplate;
};
renderInstantResult();
//******************************
//Navigation functionality
//******************************
document.querySelector(".diagonise").addEventListener("click", () => {
    window.location.assign("/diagnosis");
});
document.querySelector(".home").addEventListener("click", () => {
    window.location.assign("/user-profile");
});
