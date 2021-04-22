const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    $(".tweet-container").prepend(createTweetElement(tweet));
  }
}

const createTweetElement = (tweet) => {
  return (`
    <article class="tweet" id = custom>
      <div class="tweet-header">
        <div class="Name">
          <img src="${tweet.user.avatars}" alt="user-image" />
          ${tweet.user.name}
        </div>
        <div class="user-id">${tweet.user.handle}</div>
      </div>
      <div class="tweet-main">${document.createTextNode(tweet.content.text).textContent}</div>
      <div class="tweet-footer">
        <div
          class="need_to_be_rendered"
          datetime="${tweet.created_at}"
        ></div>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </article>`)
};

$(document).ready(() => {
  // HELPERS
  const loadTweets = () => {
    $.ajax({ method: "GET", url: "/tweets" })
      .then((data) => {
        renderTweets(data);
      })
      .fail((data) => {
        console.log("Failure on loadtweets function: ", data)
      });
  };
  const addToDatabase = (input) => {
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(input).serialize(),
    }).then(() => {
      $("#new-tweet-error").hide();
      loadTweets();
    }).fail((data) => {
      console.log("Failure on form submission: ", data);
    });
  };

  const isValidMsg = (input) => {
    let outputError = (errorText, errorDiv) => {
      errorDiv.text(errorText);
      errorDiv.slideDown();
    }
    let isValid = true;
    const errorDiv = $("#new-tweet-error");

    if (input === null || input === "") {
      outputError("value is empty", errorDiv);
      isValid = false;
    }
    if (input.length > 140) {
      errorDiv.text("message has exceeded the character limit.", errorDiv);
      isValid = false;
    }
    return isValid;
  };

  // MAIN
  loadTweets();
  $("#new-tweet-form").on("submit", function(event) {
    event.preventDefault();
    if (isValidMsg($("#tweet-text")[0].value)) {
      addToDatabase(this);
    }
    $("#tweet-text")[0].value = "";
    $("#new-tweet-counter")[0].innerHTML = 140;
  });

  $(".right").on("click", function(event) {
    $(".new-tweet").slideToggle("slow", (() => {
      if ($(".new-tweet").css("display") === "block") {
        $(".write-tweet-arrow").html(`<i class="fas fa-angle-double-up"></i>`);
        $("#tweet-text").focus();
      }
      else {
        $(".write-tweet-arrow").html(`<i class="fas fa-angle-double-down"></i>`);
      }
    }));
  });

  $(".need_to_be_rendered").each((index, element) => {
    element.innerText = timeago.format(element.attributes.datetime.value);
  });


});
