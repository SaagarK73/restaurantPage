import { header } from "./header";
import { home } from "./home";
import { foodmenu } from "./menu";
import { contact } from "./contact";

export function initialize() {
    header();
    home();
}

export function getClick() {
    const menu = document.querySelectorAll('.menu > div');
    menu.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });
}

function clearPage() {
    const content = document.querySelector('#content');
    content.textContent = "";
}

function switchTab(e) {

    console.log(e.target.innerText);
    switch (e.target.innerText) {
        case "MENU":
            clearPage();
            header();
            foodmenu();
            getClick();
            break;

        case "HOME":
            clearPage();
            header();
            home();
            getClick();
            break;

        case "CONTACT":
            clearPage();
            header();
            contact();
            getClick();
            break;
        
        default:
            break;
    }
}