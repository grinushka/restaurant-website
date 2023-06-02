'use strict';

// Imports

import './styles/index.scss';
import { menu } from './data/data-menu.js';

import pasta from './assets/pasta.jpg';
import address from './assets/location.png';
import phone from './assets/phone.png';
import email from './assets/email.png';

// Load the home tab as a default
window.onload = function () {
  displayHome();
};

// Event listeners
const navHome = document.querySelector('.nav-home');
const navMenu = document.querySelector('.nav-menu');
const navContact = document.querySelector('.nav-contact');

navHome.addEventListener('click', () => {
  clearMain();
  displayHome();
  checkActiveNav();
  navHome.classList.add('nav-selected');
});

navMenu.addEventListener('click', () => {
  clearMain();
  displayMenu();
  fillInMenu('Mains', 'Pizza', 'Salads');
  checkActiveNav();
  navMenu.classList.add('nav-selected');
});

navContact.addEventListener('click', () => {
  clearMain();
  displayContacts('contact');
  checkActiveNav();
  navContact.classList.add('nav-selected');
});

function checkActiveNav() {
  let nav = document.querySelectorAll('.nav-item');
  nav.forEach((el) => {
    if (el.classList.contains('nav-selected')) {
      el.classList.remove('nav-selected');
    }
  });
}

// DOM

// Create container
const main = document.querySelector('.main');
const container = document.createElement('div');
container.classList.add('container', 'container-main');
main.append(container);

// Functions to display different tabs

function displayHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  container.append(home);

  const homeLeft = document.createElement('div');
  homeLeft.classList.add('home-left');
  home.append(homeLeft);

  const headingS = document.createElement('h4');
  headingS.classList.add('heading-s');
  headingS.textContent = 'Discover you taste';

  const headingB = document.createElement('h1');
  headingB.classList.add('heading-b');
  headingB.innerHTML = `Authentic & Modern <br> <span>Italian Cuisine</span>`;

  const btnHome = document.createElement('button');
  btnHome.classList.add('btn', 'btn-orange');
  btnHome.textContent = 'Discover Menu';

  homeLeft.append(headingS, headingB, btnHome);

  const homeRight = document.createElement('div');
  homeRight.classList.add('home-right');
  home.append(homeRight);

  const homeRightImg = document.createElement('div');
  homeRightImg.classList.add('home-right-img');
  homeRight.append(homeRightImg);
  
  const homeImg = document.createElement('img');
  homeImg.src = './pasta.jpg';
  homeRightImg.append(homeImg);
}

function displayMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  container.append(menu);
  // menu.style.transform = 'translateY(0);'

  const menuHS = document.createElement('h3');
  menuHS.classList.add('menu__hs', 'text-center');
  menuHS.textContent = 'Discover';

  const menuHB = document.createElement('h1');
  menuHB.classList.add('menu__hb', 'text-center');
  menuHB.textContent = 'Our Food Menu';

  menu.append(menuHS, menuHB);

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu__content');
  menu.append(menuContent);
}

function fillInMenu(...args) {
  args.forEach((arg) => {
    const menuContent = document.querySelector('.menu__content');
    const course = document.createElement('div');
    course.classList.add('course');
    menuContent.append(course);

    const courseName = document.createElement('h2');
    courseName.classList.add('course-name');
    courseName.textContent = `${arg}`;
    course.append(courseName);

    for (let i = 0; i < args.length; i++) {
      const itemWrapper = document.createElement('div');
      itemWrapper.classList.add('mi-wrapper');

      course.append(itemWrapper);

      let argCourse = arg.toLowerCase();

      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      const itemName = document.createElement('span');
      itemName.classList.add('name');
      itemName.textContent = menu[argCourse][i].name;

      const underline = document.createElement('span');
      underline.classList.add('underline');

      const itemPrice = document.createElement('span');
      itemPrice.classList.add('price');
      itemPrice.textContent = menu[argCourse][i].price;

      menuItem.append(itemName, underline, itemPrice);

      const details = document.createElement('p');
      details.classList.add('details');
      details.textContent = menu[argCourse][i].details;

      itemWrapper.append(menuItem, details);
    }
  });
}

function displayContacts(className) {
  const contactUs = document.createElement('div');
  contactUs.classList.add('contact-us');
  container.append(contactUs);

  const contactHeadingB = document.createElement('h1');
  contactHeadingB.classList.add('contact-hb');
  contactHeadingB.textContent = 'Contact Us';

  const contactHeadingS = document.createElement('h6');
  contactHeadingS.classList.add('contact-hs');
  contactHeadingS.textContent =
    'Delivery, catering, events. Just give us a call';

  const contacts = document.createElement('div');
  contacts.classList.add('contacts');
  contactUs.append(contactHeadingB, contactHeadingS, contacts);

  const address = document.createElement('div');
  address.classList.add(className);
  const addressImg = document.createElement('img');
  addressImg.src = './location.png';
  const addressHeading = document.createElement('p');
  addressHeading.classList.add('contact-upper');
  addressHeading.textContent = 'Address';
  const addressDetails = document.createElement('p');
  addressDetails.classList.add('contact-details');
  addressDetails.textContent = '47 Lowe Street';
  address.append(addressImg, addressHeading, addressDetails);

  const phone = document.createElement('div');
  phone.classList.add(className);
  const phoneImg = document.createElement('img');
  phoneImg.src = './phone.png';
  const phoneHeading = document.createElement('p');
  phoneHeading.classList.add('contact-upper');
  phoneHeading.textContent = 'Phone';
  const phoneDetails = document.createElement('p');
  phoneDetails.classList.add('contact-details');
  phoneDetails.textContent = '111 776 89 90';
  phone.append(phoneImg, phoneHeading, phoneDetails);

  const email = document.createElement('div');
  email.classList.add(className);
  const emailImg = document.createElement('img');
  emailImg.src = './email.png';
  const emailHeading = document.createElement('p');
  emailHeading.classList.add('contact-upper');
  emailHeading.textContent = 'Email';
  const emailDetails = document.createElement('p');
  emailDetails.classList.add('contact-details');
  emailDetails.textContent = 'italian@mocho.com';
  email.append(emailImg, emailHeading, emailDetails);

  contacts.append(address, phone, email);
}

function clearMain() {
  let container = document.querySelector('.container-main');
  container.innerHTML = '';
}
