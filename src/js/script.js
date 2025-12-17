import 'nodelist-foreach-polyfill';
import '../css/style.css';

import tabs from './modules/tabs.js';
import modal from './modules/modal.js';
import timer from './modules/timer.js';
import cards from './modules/cards.js';
import forms from './modules/forms.js';
import slider from './modules/slider.js';
import calc from './modules/calculator.js';
import { openModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', function () {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2020-06-11');
  cards();
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
  calc();
});
