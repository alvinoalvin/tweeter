$(document).ready(function() {

  $("#tweet-text").on('keydown', function() {
    let counter = $("div").children()[8];
    console.log(counter);
    counter.innerHTML = (140 - this.textLength);

    if (counter.innerHTML < 0) {
      counter.style.color = "red";
    }
    else {
      counter.style.color = "#545149";
    }
  });
});