// /* Fichier dédié à la gestion du composant menu du site */

// // const websiteLang = localStorage.getItem("lang"); // Variable dédiée utilisée pour connaître la langue du site
// // console.log(websiteLang)

// class Collapsible extends HTMLElement {
//   constructor() {
//     super();
//     this.isOpened = false;
//     this.header = null;
//     this.content = null;

//     // attach shadow DOM
//     this.shadow = this.attachShadow({ mode: "open" });
//   }

//   toggleCollapsible = () => {
//     isOpened = !isOpened;
//   };
//   // component attributes
//   static get observedAttributes() {
//     return ["header", "content"];
//   }
//   connectedCallback() {
//     this.innerHTML = `
//     <div class="collapsible" onclick="toggleCollapsible">
//     <p>${header}</p>
//     <div class="collapsible">
//       ${content}
//     </div>
//     </div>
//     `;

//     //   //createHTMLCode(elementType, attributeType, attributeValue, appendTo, text)
//     //   const collapsibleHead = createHTMLCode(
//     //     "div",
//     //     ["class", "onclick"],
//     //     ["collapsible", "toggleCollapsible()"],
//     //     "",
//     //     collapsibleHeader
//     //   );
//     //   const collapsibleDescription = createHTMLCode(
//     //     "div",
//     //     ["class", "onclick"],
//     //     ["collapsible", "toggleCollapsible()"],
//     //     collapsibleHead,
//     //     collapsibleContent
//     //   );
//     //   let componentTag = document.getElementsByTagName("collapsible-block");
//     //   console.log(componentTag);
//     //   for (i = 0; i < componentTag.length; i++) {
//     //     componentTag[i].appendChild(navbar);
//     //   }
//   }
// }
// customElements.define("collapsible-block", Collapsible);

class Modal extends HTMLElement {
  constructor() {
    super();
    //initializations
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
            /* The Modal (background) */
            .modal {
                display: none; 
                position: fixed; 
                z-index: 1; 
                padding-top: 100px;  
            }
      /* styles truncated for brevity */
        </style>
        <button>Open Modal</button>
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <slot name="header"><h1>Default text</h1></slot>
                </div>
                <div class="modal-body">
                    <slot><slot>
                </div>
            </div>
        </div>
        `;
  }
  connectedCallback() {
    this._modal = this.shadowRoot.querySelector(".modal");
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", this._showModal.bind(this));
    this.shadowRoot
      .querySelector(".close")
      .addEventListener("click", this._hideModal.bind(this));
  }
  disconnectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", this._showModal);
    this.shadowRoot
      .querySelector(".close")
      .removeEventListener("click", this._hideModal);
  }
  _showModal() {
    this._modalVisible = true;
    this._modal.style.display = "block";
  }
  _hideModal() {
    this._modalVisible = false;
    this._modal.style.display = "none";
  }
}
customElements.define("modal-element", Modal);
