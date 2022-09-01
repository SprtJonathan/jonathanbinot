import { createElementFromTemplate } from "../helpers";

function Modal(instanceName, header, body) {
  const modalName = instanceName;
  const modalHeader = header;
  const modalBody = body;

  //const modalCloseButton = props.closeButton;

  const modalInstance = createElementFromTemplate(
    "div",
    {
      id: modalName,
      class: "hidden",
    },
    "",
    ""
  );

  const modalContainer = createElementFromTemplate(
    "div",
    {
      class: "modal--container",
    },
    "",
    modalInstance
  );

  const modalContent = createElementFromTemplate(
    "div",
    {
      class: "modal--content",
    },
    "",
    modalContainer
  );

  createElementFromTemplate("div", { class: "modal--blur" }, "", modalContent);

  const modalHeaderContainer = createElementFromTemplate(
    "div",
    { class: "modal--header" },
    "",
    modalContent
  );

  if (modalHeader != "" || modalHeader != null) {
    createElementFromTemplate("h2", "", modalHeader, modalHeaderContainer);
  }

  // Modal close button
  const closeButton = createElementFromTemplate(
    "button",
    { type: "button", id: "close-modal", class: "modal--exit" },
    "X",
    modalHeaderContainer
  );

  // Modal body container
  createElementFromTemplate(
    "div",
    { class: "modal--body" },
    modalBody,
    modalContent
  );

  const modalResultObject = {
    htmlCode: modalInstance,
    closeButton: closeButton,
  };

  return modalResultObject;
}

export default Modal;
