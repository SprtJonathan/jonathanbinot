export default function Collapsible(collapsibleId, titleContent, bodyContent) {
  let collapsibleState = false;

  const collapsibleContainer = document.createElement("div");
  collapsibleContainer.setAttribute("id", collapsibleId);
  collapsibleContainer.setAttribute("class", "collapsible--container");

  const collapsibleExpandIcon = document.createElement("span");
  collapsibleExpandIcon.setAttribute(
    "id",
    "collapsible-" + collapsibleId + "-icon"
  );
  collapsibleExpandIcon.setAttribute(
    "class",
    "collapsible--title--text--chevron"
  );
  collapsibleExpandIcon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;

  const collapsibleTitle = document.createElement("div");
  collapsibleTitle.setAttribute("id", collapsibleId + "-title");
  collapsibleTitle.setAttribute("class", "collapsible--title");
  collapsibleTitle.innerHTML = `<span class="collapsible--title--text">${titleContent} </span>`;
  collapsibleTitle.append(collapsibleExpandIcon);

  collapsibleContainer.appendChild(collapsibleTitle);

  const collapsibleContent = document.createElement("div");
  collapsibleContent.setAttribute("id", collapsibleId + "-content");
  collapsibleContent.setAttribute("class", "collapsible--content");
  collapsibleContent.innerHTML = bodyContent;

  collapsibleContainer.appendChild(collapsibleContent);

  //   console.log(collapsibleTitle);

  collapsibleTitle.addEventListener("click", toggleCollapsible);

  function toggleCollapsible() {
    // console.log(collapsibleState);
    if (collapsibleState) {
      collapsibleContent.style.maxHeight = null;
      collapsibleContent.style.background = "none";
      collapsibleContent.style.boxShadow = "none"
      collapsibleExpandIcon.classList = "collapsible--title--text--chevron";
      collapsibleState = !collapsibleState;
    } else {
      collapsibleContent.style.maxHeight =
        collapsibleContent.scrollHeight + "px";
      collapsibleContent.style.background = "rgba(255, 255, 255, 0.548)";
      collapsibleContent.style.boxShadow =
        "0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)";
      collapsibleExpandIcon.classList =
        "collapsible--title--text--chevron--upside-down";
      collapsibleState = !collapsibleState;
    }
  }
  return collapsibleContainer;
}
