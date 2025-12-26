import 'nodelist-foreach-polyfill';
import '../css/style.css';
import { openModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', function () {
  const modalTimerId = setTimeout(() => {
    openModal('.modal', modalTimerId);
  }, 50000);
  import('./modules/timer.js').then(({ default: timer }) => {
    timer('.timer', '2020-06-11');
  });

  import('./modules/modal.js').then(({ default: modal }) => {
    const modalTimerId = setTimeout(() => {
      import('./modules/modal.js').then(({ openModal }) => {
        openModal('.modal', modalTimerId);
      });
    }, 50000);

    modal('[data-modal]', '.modal', modalTimerId);
  });

  import('./modules/tabs.js').then(({ default: tabs }) => {
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  });

  import('./modules/cards.js').then(({ default: cards }) => {
    cards();
  });

  import('./modules/forms.js').then(({ default: forms }) => {
    forms('form', modalTimerId);
  });

  import('./modules/slider.js').then(({ default: slider }) => {
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
  });

  import('./modules/calculator.js').then(({ default: calc }) => {
    calc();
  });
});
