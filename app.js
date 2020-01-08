$(document).ready(function () {
  $('.card-header-icon').click(function () {
    $(this.offsetParent.lastElementChild).toggle();
  });
});