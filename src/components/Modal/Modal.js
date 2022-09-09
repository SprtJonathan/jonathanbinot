import { createElementFromTemplate } from "../helpers";

function Modal(instanceName, header, body, className) {
  const modalName = instanceName;
  const modalHeader = header;
  const modalBody = body;

  //const modalCloseButton = props.closeButton;
  let modalClassName;

  if (!className) {
    modalClassName = "modal";
  } else {
    modalClassName = className;
  }

  const modalInstance = createElementFromTemplate(
    "div",
    {
      id: modalName,
      class: modalClassName + "--container--base",
    },
    "",
    ""
  );

  const modalContainer = createElementFromTemplate(
    "div",
    {
      class: modalClassName + "--container",
    },
    "",
    modalInstance
  );

  const modalContent = createElementFromTemplate(
    "div",
    {
      class: modalClassName + "--content",
    },
    "",
    modalContainer
  );

  createElementFromTemplate(
    "div",
    { class: modalClassName + "--blur" },
    "",
    modalContent
  );

  const modalHeaderContainer = createElementFromTemplate(
    "div",
    { class: modalClassName + "--header" },
    "",
    modalContent
  );

  if (modalHeader != "" || modalHeader != null) {
    createElementFromTemplate(
      "h2",
      { class: modalClassName + "--header--text" },
      modalHeader,
      modalHeaderContainer
    );
  }

  // Modal close button
  const closeButton = createElementFromTemplate(
    "button",
    { type: "button", id: "close-modal", class: modalClassName + "--exit" },
    "X",
    modalHeaderContainer
  );

  // Modal body container
  createElementFromTemplate(
    "div",
    { class: modalClassName + "--body" },
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
