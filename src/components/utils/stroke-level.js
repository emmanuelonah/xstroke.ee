export const _strokeLevel = (strokeLevel) => {
    let _computedstrokeLevel;
    let strokeDivision = Number(strokeLevel) / 4;
    let strokeLevelRoundUp = Math.round(strokeDivision);

    if (strokeLevelRoundUp >= 4) {
        _computedstrokeLevel = 4;
        window.localStorage.setItem("strokeLevel", strokeLevelRoundUp);
    } else {
        _computedstrokeLevel = strokeLevelRoundUp;
    }
    return _computedstrokeLevel;
};
