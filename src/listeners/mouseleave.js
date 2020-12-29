'use strict';

//import { changeSeparatorHandler } from '../handlers/change-separator.js';

import { data } from '../data.js';
const slider = document.querySelector('.items');

let isDown = false;



slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});