'use strict';

import { data } from '../data.js';

const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;


slider.addEventListener('mousemove', (e) => {
    if (!data.isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - data.startX) * 3;
    slider.scrollLeft = data.scrollLeft - walk;
  });
