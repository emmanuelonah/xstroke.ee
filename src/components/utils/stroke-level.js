export const _strokeLevel = (strokeLevel) => {
    let strokeLevel = Math.round(strokeLevel);
    if (strokeLevel >= 4) strokeLevel = 4;

    window.localStorage.setItem("strokeLevel");
};
