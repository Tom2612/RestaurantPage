import {createSubtext} from './home.js';
import {createMenu} from './menu.js';
import { createContact } from './contact.js';

const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li')
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    
    header.classList.add('header');
    nav.classList.add('nav');

    li1.textContent = 'Home';
    li1.id = 'home';
    li2.textContent = 'Menu';
    li2.id = 'menu';
    li3.textContent = 'Contact';
    li3.id = 'contact';
    h1.textContent= 'Rustic Pizza';

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    nav.appendChild(ul);
    header.appendChild(h1);
    header.appendChild(nav);
    return header;
};

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    return main;
};

function createFooter() {
    const footer = document.createElement('div');
    const footerText = document.createElement('p');
    footer.classList.add('footer');
    footerText.textContent = 'Created by TomP2612';
    footer.appendChild(footerText);
    return footer;
};

export const buildPage = () => {
    content.appendChild(createHeader());
    content.appendChild(createMain());
    const main = document.querySelector('.main');
    main.appendChild(createSubtext());
    content.appendChild(createFooter());
    return content;
};

export const toggle = () => {
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');
    let main = document.querySelector('.main');

    home.addEventListener('click', () => {
        main.innerHTML = '';
        main.appendChild(createSubtext());
    });
    menu.addEventListener('click', () => {
        main.innerHTML = '';
        main.appendChild(createMenu());
    });
    contact.addEventListener('click', () => {
        main.innerHTML = '';
        main.appendChild(createContact());
    });
};