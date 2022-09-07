const createElementFromTemplate = (
  tagName,
  elementAttributes,
  textContent,
  appendTo
) => {
  const newElement = document.createElement(tagName);
  for (const [key, value] of Object.entries(elementAttributes)) {
    newElement.setAttribute(key, value);
  }
  newElement.innerHTML = textContent;
  if (!appendTo) {
    return newElement;
  }
  appendTo.appendChild(newElement);
  return newElement;
};

/**
 * If appendModalTo is not null, append the element to appendModalTo, otherwise remove the element.
 * @param element - The modal element
 * @param appendModalTo - This is the element that you want to append the modal to.
 */
function toggleModal(element, appendModalTo) {
  // console.log(value === true);
  if (appendModalTo != null) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
}

export { createElementFromTemplate, toggleModal };
