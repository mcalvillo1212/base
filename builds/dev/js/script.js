'use strict';

// $(document).ready(function () {
//initialize swiper when document ready
var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    } // renderBullet
  }, //pagination

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev' // navigation
  } }); // swiper

// $('.modal').modal();

// });
'use strict';

// External scripts libraries
var $ = require('jquery'),
    swiper = require('swiper'),
    materialize = require('materialize-css');

//# sourceMappingURL=script.js.map