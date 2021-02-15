/* global $ */
$('document').ready(function () {
  const amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });
});
/*
    Based on 1-hbnb.js
    Request http://0.0.0.0:5001/api/v1/status/:
        If in the status is “OK”, add the class available to the DIV#api_status
        Otherwise, remove the class available to the DIV#api_status
*/
const apiStatus = $('DIV#api_status');
$.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
  if (data.status === 'OK') {
    apiStatus.addClass('available');
  } else {
    apiStatus.removeClass('available');
  }
});
