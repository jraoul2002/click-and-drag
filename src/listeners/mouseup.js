'use strict';


import { data } from '../data.js';

const slider = document.querySelector('.items');
  let isDown = false;
 // let startX;
 // let scrollLeft;


slider.addEventListener('mouseup', () => {
    data.isDown = false;
    slider.classList.remove('active');
  });