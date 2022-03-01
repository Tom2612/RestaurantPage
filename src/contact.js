export const createContact = () => {
    const contactBox = document.createElement('div');

    const email = document.createElement('div');
    email.textContent = 'Email us:';
    contactBox.appendChild(email);

    const emailAd = document.createElement('div');
    emailAd.textContent = 'rustic-pizza@gmai.com';
    contactBox.append(emailAd);

    const call = document.createElement('div');
    call.textContent = 'Call us:';
    contactBox.append(call);

    const callNum = document.createElement('div');
    callNum.textContent = '(+44)7 5524 1874';
    contactBox.append(callNum);

    const find = document.createElement('div');
    find.textContent = 'Find us:';
    contactBox.append(find);

    const findAd = document.createElement('div');
    findAd.textContent = '23 Open Lane, Newhaven, Lambaster';
    contactBox.append(findAd);
    
    contactBox.classList.add('contact');

    return contactBox;
}
