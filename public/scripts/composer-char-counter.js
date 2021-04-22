$(document).ready(function() {

  $("#tweet-text").on('keypress ', function() {
    let max = 140;
    let counter = $("#new-tweet-counter")[0];
    console.log(counter)
    counter.innerHTML = (max - this.textLength);

    if (this.textLength > max) {
      $("#new-tweet-counter").css("color", "red");
    }
    else {
      $("#new-tweet-counter").css("color", "#545149");
    }
  });
});