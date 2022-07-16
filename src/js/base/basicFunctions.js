// Fonction permettant d'optimiser la création de code HTML via JS
// Elle prend en paramètre le type d'élément
// Un type d'attribut ou un tableau de types d'attributs
// La valeur de l'attribut ou les valeurs du tableau d'attributs (dans l'ordre du tableau de types d'attributs)
// L'élément auquel parenter le nouvel élément créé (facultatif)
// Le texte de cet élément (facultatif)
function createHTMLCode(
  elementType,
  attributeType,
  attributeValue,
  appendTo,
  text
) {
  const elementToCreate = document.createElement(elementType);
  if (attributeType && attributeValue) {
    if (Array.isArray(attributeType) && Array.isArray(attributeValue)) {
      for (i = 0; i < attributeType.length; i++) {
        elementToCreate.setAttribute(attributeType[i], attributeValue[i]);
      }
    } else {
      elementToCreate.setAttribute(attributeType, attributeValue);
    }
  }

  if (appendTo) {
    appendTo.appendChild(elementToCreate);
  }
  if (text) {
    elementToCreate.innerHTML = text;
  }
  return elementToCreate;
}

// Fonction permettant de retirer les espaces pour la création des ID
function removeSpacesForId(string) {
  return string.split(" ").join("-");
}
