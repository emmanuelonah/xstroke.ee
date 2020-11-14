const instantResultContainer = document.querySelector(".instant-result-container");

document.querySelector(".diagonise").addEventListener("click", () => {
    window.location.assign("/diagnosis");
});

document.querySelector(".home").addEventListener("click", () => {
    window.location.assign("/user-profile");
});

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
    //console.log(physicalActivityMessage, bloodPressureMessage, cigarretesMessage, massIndexMessage);
};
renderInstantResult();
