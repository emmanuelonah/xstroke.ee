//******************************************
// Generic modal function
//******************************************/
export const genericModal = (
    modalClass,
    modalType,
    modalImg,
    modalButtonClass,
    successMessage,
    buttonText,
    buttonNavigationLink,
    htmlBodyToInsertTheModalIn
) => {
    ///div modal container
    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("class", modalClass);

    ///div menuIcon wrapper
    const menuIconDiv = document.createElement("div");
    menuIconDiv.setAttribute("class", "menu--bar modal__menu__icon");

    ///span
    const menuSpan1 = document.createElement("span");
    menuSpan1.setAttribute("class", "top");

    ///span
    const menuSpan2 = document.createElement("span");
    menuSpan2.setAttribute("class", "bottom");

    ///append menu spans to menuIcon wrapper
    menuIconDiv.append(menuSpan1);
    menuIconDiv.append(menuSpan2);

    ///img
    const img = document.createElement("img");
    img.setAttribute("src", modalImg);
    img.setAttribute("alt", "");

    ///h4
    const h4 = document.createElement("h4");
    h4.textContent = modalType;

    // paragraph
    const p = document.createElement("p");
    p.textContent = successMessage;

    // button
    const button = document.createElement("button");
    button.setAttribute("class", modalButtonClass);
    button.textContent = buttonText;

    ///Append all elements to modalContainer
    modalContainer.append(menuIconDiv);
    modalContainer.append(img);
    modalContainer.append(h4);
    modalContainer.append(p);
    modalContainer.append(button);

    ///remove this element parent from the DOM when menuIconDiv is clicked
    menuIconDiv.addEventListener("click", () => {
        htmlBodyToInsertTheModalIn.removeChild(modalContainer);
    });

    ///click event on button
    button.addEventListener("click", (e) => {
        window.location.assign(buttonNavigationLink);
    });

    ///Insert the modal to the htmlBodyElement
    htmlBodyToInsertTheModalIn.insertBefore(
        modalContainer,
        htmlBodyToInsertTheModalIn.childNodes[0]
    );
};
