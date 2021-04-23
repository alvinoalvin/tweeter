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

  $(".right").on("click", function(event) {
    $("#new-tweet").slideToggle("slow", (() => {
      if ($("#new-tweet").css("display") === "block") {
        $("#write-tweet-arrow").html(`<i class="fas fa-angle-double-up"></i>`);
        window.scrollTo(0, 0);
        $("#tweet-text").focus();
      } else {
        $("#write-tweet-arrow").html(`<i class="fas fa-angle-double-down"></i>`);
      }
    }));
  });
});