import '../scss/app.scss';

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
