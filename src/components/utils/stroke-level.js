export const _strokeLevel = (strokeLevel) => {
    let _computedstrokeLevel;
    let strokeDivision = Number(strokeLevel) / 4;
    let strokeLevelRoundUp = Math.round(strokeDivision);
    _computedstrokeLevel = strokeLevelRoundUp;

    if (_computedstrokeLevel >= 4) {
        _computedstrokeLevel = 4;
    }
    window.localStorage.setItem("strokeLevel", _computedstrokeLevel);
    return _computedstrokeLevel;
};
