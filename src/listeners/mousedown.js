'use strict';


import { data } from '../data.js';


const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    data.isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    data.startX = startX;
  data.scrollLeft = scrollLeft;
  });