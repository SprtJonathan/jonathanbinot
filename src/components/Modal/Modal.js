function Modal(instanceName, header, body) {
  const modalName = instanceName;
  const modalHeader = header;
  const modalBody = body;

  //const modalCloseButton = props.closeButton;

  const modalInstance = document.createElement("div");
  modalInstance.className = "hidden";
  modalInstance.id = modalName;

  modalInstance.innerHTML =
    `
  <div class="modal--container">
    <div class="modal--content">
    <div class="modal--blur"></div>
      <div class="modal--header">
        <h2>` +
    modalHeader +
    `</h2>
        <button id="close-modal" class="modal--exit">X</button>
      </div>
      <div class="modal--body">` +
    modalBody +
    `</div>
    </div>
  </div>
    `;
  //console.log(modalInstance);

  return modalInstance;
}

export default Modal;