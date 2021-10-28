import '../scss/app.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 400,
  // hashNavigation: {
  //   watchState: true,
  // },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const $ = require('jquery');

$(document).ready(function() {
  // E-mail Ajax Send
  $('form').submit(function() { // Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', // Change
      data: th.serialize(),
    }).done(function() {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      alert('Thank you!');
      setTimeout(function() {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});

/* Your JS Code goes here */

/* Demo JS */
