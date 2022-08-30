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
  appendTo.appendChild(newElement);
  return newElement;
};

export { createElementFromTemplate };
