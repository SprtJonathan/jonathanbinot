import "./style.css";

const contactModal = document.createElement("div");
contactModal.className = "hidden";
contactModal.id = "contact-modal";

function toggleModal() {
  if (contactModal.className === "hidden") {
    contactModal.className = "modal-container";
  } else {
    contactModal.className = "hidden";
  }
}

export function ContactModal() {
  contactModal.innerHTML = `
    <div class="contact-form-backrgound">
        <form class="contact-form">
            <h2>Me contacter</h2>
            <div class="contact-form--category contact-form name">
                <label for="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div class="contact-form--category contact-form email">
                <label for="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div class="contact-form--category contact-form object">
                <label for="object">Objet</label>
                <input type="text" name="object" />
            </div>
            <div class="contact-form--category contact-form message">
                <label for="message">Message</label>
                <textarea name="message"></textarea>
            </div>
            <div>
                <input class="button" type="submit" value="Envoyer" />
                <span id="close-modal" class="button" type="submit" onclick=toggleModal>
                )}">X</span>
            </div>
        </form>
    </div>
    `;
  return contactModal;
}

export { toggleModal };
