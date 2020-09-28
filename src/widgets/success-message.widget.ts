import "../styles/&__error&success.modal.style.css";

class SuccessWidget {
  public returnSuccessWidget(successMessage: string, htmlBodyToInsertTheModalIn: HTMLBodyElement): HTMLDivElement {
    ///div modal container
    const successModalContainer: HTMLDivElement = document.createElement("div");
    successModalContainer.setAttribute("class", "modal success--modal");

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
    menuIconDiv.append(menuSpan1);
    menuIconDiv.append(menuSpan2);

    ///img
    const img: HTMLImageElement = document.createElement("img");
    img.setAttribute("src", "../assets/images/success.png");
    img.setAttribute("alt", "");

    ///h4
    const h4: HTMLHeadingElement = document.createElement("h4");
    h4.textContent = "Successful";

    // paragraph
    const p: HTMLParagraphElement = document.createElement("p");
    p.textContent = successMessage;

    // button
    const button: HTMLButtonElement = document.createElement("button");
    button.setAttribute("class", "okay--button success__ok");
    button.textContent = "Got to profile";

    ///Append all elements to successModalContainer
    successModalContainer.append(menuIconDiv);
    successModalContainer.append(img);
    successModalContainer.append(h4);
    successModalContainer.append(p);
    successModalContainer.append(button);

    ///remove this element parent from the DOM when menuIconDiv is clicked
    menuIconDiv.addEventListener("click", _ => {
      htmlBodyToInsertTheModalIn.removeChild(successModalContainer);
    });

    ///click event on button
    button.addEventListener("click", e => {
      window.location.assign("/index");
    });

    ///Insert the modal to the htmlBodyElement argument
    htmlBodyToInsertTheModalIn.insertBefore(successModalContainer, htmlBodyToInsertTheModalIn.childNodes[0]);

    return successModalContainer;
  }
}
export default SuccessWidget;
