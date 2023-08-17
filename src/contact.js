export function contact() {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.classList.add("contact");
    content.appendChild(contact);

    const address = document.createElement('div');
    address.textContent = "1, North Street, Pune";
    contact.appendChild(address);

    const phone = document.createElement('div');
    phone.textContent = "+91 9876543210";
    contact.appendChild(phone);

    const email = document.createElement('div');
    email.textContent = "annas@gmail.com";
    contact.appendChild(email);


}