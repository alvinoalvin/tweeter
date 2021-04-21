const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    $(".tweet-container").prepend(createTweetElement(tweet));
  }
}

const createTweetElement = (tweet) => {
  return $(`
    <article class="tweet" id = custom>
      <div class="tweet-header">
        <div class="Name">
          <img src="${tweet.user.avatars}" alt="user-image" />
          ${tweet.user.name}
        </div>
        <div class="user-id">${tweet.user.handle}</div>
      </div>
      <div class="tweet-main">${tweet.content.text}</div>
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
    </article>`
  )
};

$(document).ready(() => {
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
      loadTweets();
    }).fail((data) => {
      console.log("Failure on form submission: ", data);
    });
  };

  const isValidMsg = (input) => {
    let isValid = true;
    if (input === null || input === "") {
      alert("value is empty");
      isValid = false;
    }
    if (input.length > 140) {
      alert("message has exceeded the character limit.");
      isValid = false;
    }
    return isValid;
  };

  loadTweets();

  $("#new-tweet-form").on("submit", function(event) {
    event.preventDefault();
    if (isValidMsg($("#tweet-text")[0].value)) {
      addToDatabase(this);
    }
    $("#tweet-text")[0].value = "";
  });

  $(".need_to_be_rendered").each((index, element) => {
    element.innerText = timeago.format(element.attributes.datetime.value);
  });

});
