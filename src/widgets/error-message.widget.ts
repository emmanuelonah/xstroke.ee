import "../styles/&__error&error.modal.style.css";

class ErrorWidget {
  public returnErrorWidget(errorMessage: string, htmlBodyToInsertTheModalIn: HTMLBodyElement): HTMLDivElement {
    ///div modal container
    const errorModalContainer: HTMLDivElement = document.createElement("div");
    errorModalContainer.setAttribute("class", "modal error--modal");

    ///div menuIcon wrapper
    const menuIconDiv: HTMLDivElement = document.createElement("div");
    menuIconDiv.setAttribute("class", "menu--bar modal__menu__icon");

    ///span
    const menuSpan1: HTMLSpanElement = document.createElement("span");
    menuSpan1.setAttribute("click", "top");

    ///span
    const menuSpan2: HTMLSpanElement = document.createElement("span");
    menuSpan2.setAttribute("class", "bottom");

    ///append menu spans to menuIcon wrapper
    menuIconDiv.append(menuIconDiv);
    menuIconDiv.append(menuSpan2);

    ///img
    const img: HTMLImageElement = document.createElement("img");
    img.setAttribute("src", "../assets/images/error.png");
    img.setAttribute("alt", "");

    ///h4
    const h4: HTMLHeadingElement = document.createElement("h4");
    h4.textContent = "Error";

    // paragraph
    const p: HTMLParagraphElement = document.createElement("p");
    p.textContent = errorMessage;

    // button
    const button: HTMLButtonElement = document.createElement("button");
    button.setAttribute("class", "okay--button error__button");
    button.textContent = "Got to profile";

    ///Append all elements to errorModalContainer
    errorModalContainer.append(menuIconDiv);
    errorModalContainer.append(img);
    errorModalContainer.append(h4);
    errorModalContainer.append(p);
    errorModalContainer.append(button);

    ///remove this element parent from the DOM when menuIconDiv is clicked
    menuIconDiv.addEventListener("click", _ => {
      htmlBodyToInsertTheModalIn.removeChild(errorModalContainer);
    });

    ///click event on button
    button.addEventListener("click", e => {
      //  window.location.assign("/index");
      htmlBodyToInsertTheModalIn.removeChild(errorModalContainer);
    });

    ///Insert the modal to the htmlBodyElement argument
    htmlBodyToInsertTheModalIn.insertBefore(errorModalContainer, htmlBodyToInsertTheModalIn.childNodes[0]);

    return errorModalContainer
  }
}

export default ErrorWidget;
