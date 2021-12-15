import {getProfile, getPhotographerId} from '../components/query.js'

export async function openContactModal() {
    const contactModal = document.getElementById('contact_modal');
    contactModal.style.setProperty('display', 'flex');
    const contactModalTitle  = document.getElementById('contact_modal_title');
    const photographerProfile = await getProfile(getPhotographerId());
    const photographerName = photographerProfile.name;
    const form = document.forms["contact-form"];
    contactModalTitle.textContent = `Contactez-moi ${photographerName}`;
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        submitContactForm();
    });
};

export function closeContactModal() {
    const contactModal = document.getElementById('contact_modal');
    contactModal.style.setProperty('display', 'none');
};

function submitContactForm() {
    const firstNameInputDOM = document.getElementById('contact-first-name');
    const lastNameInputDOM = document.getElementById('contact-last-name');
    const emailInputDOM = document.getElementById('contact-email');
    const messageInputDOM = document.getElementById('contact-message');
    console.log(`Bonjour ${firstNameInputDOM.value} ${lastNameInputDOM.value}\n
    Votre message a bien été envoyé au photographe.\n
    Veuillez retrouver votre message ci-dessous :\n
    \"${messageInputDOM.value}\"\n
    Une copie de ce message vous sera envoyée à\n
    ${emailInputDOM.value}`);
    document.forms['contact-form'].reset()
    closeContactModal();
}