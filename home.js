const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    
    header.classList.add('header');
    nav.classList.add('nav');

    li1.textContent = 'Home';
    li2.textContent = 'Menu';
    li3.textContent = 'Contact';
    h1.textContent= 'Rustic Pizza';

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    nav.appendChild(ul);
    header.appendChild(h1);
    header.appendChild(nav);
    return header;
};

function createSubtext() {
    const subText = document.createElement('div');
    const text = document.createElement('p');
    subText.classList.add('subtext');
    text.textContent = 'Handcrafted, made-to-order, authentic Italian pizza cooked in a traditional oven with our signature sourdough base and family-recipe tomato sauce.';
    subText.appendChild(text);
    return subText;
};

function createFooter() {
    const footer = document.createElement('div');
    const footerText = document.createElement('p');
    footer.classList.add('footer');
    footerText.textContent = 'Created by TomP2612';
    footer.appendChild(footerText);
    return footer;
};

exports.buildPage = () => {
    // const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createSubtext());
    content.appendChild(createFooter());
    return content;
};

export default buildPage;
