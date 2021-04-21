const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $(".tweet-container").append(createTweetElement(tweet));
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

const $tweet = createTweetElement(tweetData);

$(document).ready(() => {
  $(".tweet-container").append($tweet)
  $(".need_to_be_rendered").each((index, element) => {
    element.innerText = timeago.format(element.attributes.datetime.value);

  });
});
