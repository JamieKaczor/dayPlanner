// get current day...format('ll')=month day, year

window.onload = function () {
    date = moment().format('ll');
    $('#currentDay').html(date);
 }


