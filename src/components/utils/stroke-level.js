export const _strokeLevel = (strokeLevel) => {
    let strokeLevelRoundUp = Math.round(strokeLevel);
    if (strokeLevelRoundUp >= 4) strokeLevelRoundUp = 4;

    window.localStorage.setItem("strokeLevel", strokeLevelRoundUp);

    return strokeLevel;
};
