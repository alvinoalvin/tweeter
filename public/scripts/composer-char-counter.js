$(document).ready(function() {

  $("#tweet-text").on('keydown', function() {
    let counter = $("div").children()[8];
    console.log(counter);
    counter.innerHTML = (140 - this.textLength);

    console.log(timeAgo(new Date())); // just now
    console.log(timeAgo(Date.now() + 3 * 60 * 60 * 1000));


    if (counter.innerHTML < 0) {
      counter.style.color = "red";
    }
    else {
      counter.style.color = "#545149";
    }
  });
});