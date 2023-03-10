import Logo from './images/logo.png'

// Homepage

function insertLogo() {
    const board = document.querySelector('.board');
    const logoContainer = document.createElement('div');
    const principalLogo = new Image();
    const text = document.createElement('div');
    const line1 = document.createElement('div');
    const line2 = document.createElement('div');

    line1.innerHTML = 'Serving the sweetest experiences since 2010.'
    line2.innerHTML = 'Come explore a world full of flavors with us.';

    principalLogo.src = Logo;

    logoContainer.classList.add('logo-container');
    principalLogo.classList.add('princ-logo');
    text.classList.add('subtext');

    board.appendChild(logoContainer);
    logoContainer.appendChild(principalLogo);
    logoContainer.appendChild(text);
    text.appendChild(line1);
    text.appendChild(line2);
}

function Location() {
    const board = document.querySelector('.board');
    const locationContainer = document.createElement('div');
    const locationTitle = document.createElement('div');
    const locationContent = document.createElement('div');

    locationContainer.classList.add('location-container');
    locationTitle.classList.add('title');
    locationContent.classList.add('location-cont');

    locationTitle.innerHTML = 'Location';
    locationContent.innerHTML = '3082 King Center, Sacramento, California';

    board.appendChild(locationContainer);
    locationContainer.appendChild(locationTitle);
    locationContainer.appendChild(locationContent);
}

function Hours() {
    const board = document.querySelector('.board');
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('div');
    const hoursList = document.createElement('ul');
    const hours = ['Monday-Friday: 9:00 - 17:00',
                   'Saturday: 10:00 - 17:00',
                   'Sunday: 10:00 - 13:00']

    hoursContainer.classList.add('hours-cont');
    hoursTitle.classList.add('title');
    hoursList.classList.add('hours-list');

    hoursTitle.innerHTML = 'Hours';

    for (let hour in hours) {
        let day = document.createElement('li');
        day.innerHTML = hours[hour];
        day.classList.add('hour');
        hoursList.appendChild(day);
    };

    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hoursList);
    board.appendChild(hoursContainer);
}

export {insertLogo, Hours, Location};
