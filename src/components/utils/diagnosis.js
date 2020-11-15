//**************************************************
//Cigarettes Smoked PervWeek analysis
//**************************************************
export const cigarettesSmokedPerWeek = (cigarettesPiecesSmoked) => {
    const cigSmokedPerWeek = Number(cigarettesPiecesSmoked);

    switch (true) {
        case cigSmokedPerWeek > 24:
            return 4;

        case cigSmokedPerWeek >= 13 && cigSmokedPerWeek <= 24:
            return 3;

        case cigSmokedPerWeek >= 7 && cigSmokedPerWeek <= 12:
            return 2;

        case cigSmokedPerWeek >= 1 && cigSmokedPerWeek <= 6:
            return 1;

        case cigSmokedPerWeek === 0:
            return 0;

        default:
            return 0;
    }
};

//**************************************************
//Physical activities analysis
//**************************************************
export const physicalActivity = (hours, minutes) => {
    const hoursPerDay = hours * 3600 + minutes * 60; //converted to seconds

    switch (true) {
        //1hrs = 3600secs
        case hoursPerDay >= 0 && hoursPerDay <= 3600:
            return 4;

        //1hr = 3600secs & 1.4hrs = 5040secs
        case hoursPerDay > 3600 && hoursPerDay < 5040:
            return 3;

        //1.5hrs = 5400secs & 2.4hr =8640
        case hoursPerDay >= 5040 && hoursPerDay <= 8999:
            return 2;

        //2.5hrs = 9000 & 3.4hrs = 12240
        case hoursPerDay >= 9000 && hoursPerDay <= 12240:
            return 1;

        //3.5hrs = 12600secs
        case hoursPerDay > 12240:
            return 0;

        default:
            return 4;
    }
};

//**************************************************
//Body mass index analysis
//**************************************************
export const bodyMassIndex = (height, weigth) => {
    const heightCalculation = Number(height / 100) ** 2;
    const calculation = Number(weigth) / heightCalculation;
    const bodyMassIndex = Math.round(calculation);

    console.log(bodyMassIndex);

    switch (true) {
        case bodyMassIndex >= 35.0:
            return 3;

        case bodyMassIndex >= 30.0 && bodyMassIndex <= 34.99:
            return 2;

        case bodyMassIndex >= 25.0 && bodyMassIndex <= 29.99:
            return 1;

        case bodyMassIndex >= 18.5 && bodyMassIndex <= 24.99:
            return 0;

        case bodyMassIndex < 18.5:
            return -1;

        default:
            return -1;
    }
};

export const bloodPressure = (systolic, diastolic) => {
    const calculation = Number(diastolic) / Number(systolic);
    const bloodPressure = Math.round(calculation);
    return bloodPressure;
};
