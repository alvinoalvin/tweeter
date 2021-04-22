$(document).ready(function() {
  $(document).scroll(function() {
    if ($(window).width() > 1200) {
      if ($(window).scrollTop() === 0) {
        $("#to-top").hide();
      } else {
        $("#to-top").show();
      }
    } else {
      $("#to-top").hide();
    }
  });
});