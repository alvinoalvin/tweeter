$(document).ready(function() {

  $("#tweet-text").on('keyup ', function() {
    let counter = $("div").children()[8];
    counter.innerHTML = (140 - this.textLength);
    
    if (counter.innerHTML < 0) {
      counter.style.color = "red";
    }
    else {
      counter.style.color = "#545149";
    }
  });
});