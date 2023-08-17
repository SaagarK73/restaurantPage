export function header() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('div');
    header.classList.add("header");
    content.appendChild(header);

    const name = document.createElement('div');
    name.textContent = "Anna's South";
    header.appendChild(name);

    const menu = document.createElement('div');
    menu.classList.add("menu")
    header.appendChild(menu);

    const home = document.createElement('div')
    home.textContent = "HOME";
    menu.appendChild(home);
    const items = document.createElement('div')
    items.textContent = "MENU";
    menu.appendChild(items);
    const contact = document.createElement('div')
    contact.textContent = "CONTACT";
    menu.appendChild(contact);
}