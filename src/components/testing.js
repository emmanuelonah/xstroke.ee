const _body = document.querySelector("body");

const returnSuccessWidget = (modalClass, modalType, modalButtonClass, successMessage, buttonText, buttonNavigationLink, htmlBodyToInsertTheModalIn) => {
  ///div modal container
  const successModalContainer = document.createElement("div");
  successModalContainer.setAttribute("class", modalClass);

  ///div menuIcon wrapper
  const menuIconDiv = document.createElement("div");
  menuIconDiv.setAttribute("class", "menu--bar modal__menu__icon");

  ///span
  const menuSpan1 = document.createElement("span");
  menuSpan1.setAttribute("click", "top");

  ///span
  const menuSpan2 = document.createElement("span");
  menuSpan2.setAttribute("class", "bottom");

  ///append menu spans to menuIcon wrapper
  menuIconDiv.append(menuSpan1);
  menuIconDiv.append(menuSpan2);

  ///img
  const img = document.createElement("img");
  img.setAttribute("src", "../assets/images/success.png");
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
    window.location.assign(buttonNavigationLink);
  });

  ///Insert the modal to the htmlBodyElement argument
  htmlBodyToInsertTheModalIn.insertBefore(successModalContainer, htmlBodyToInsertTheModalIn.childNodes[0]);
};

returnSuccessWidget("modal success--modal", "Successful", "okay--button success__ok", "emmajerry2016@gmail.com have been successfully created", "Sign in", "/login", _body);
