/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json

const data = [
  {
    "user": {
      "name": "Rear Admiral Grace Hopper",
      "avatars": "https://imgur.com/fZkw344.png",
      "handle": "@RAGH"
    },
    "content": {
      "text": "The most damaging phrase in the language is: \"It's always been done that way.\""
    },
    "created_at": 1688232038771
  },
  {
    "user": {
      "name": "Amelia Earhart",
      "avatars": "https://imgur.com/diZQRwS.png",
      "handle": "@aearhart"
    },
    "content": {
      "text": "The most difficult thing is the decision to act. The rest is merely tenacity."
    },
    "created_at": 1688318438771
  }
];

const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    // takes return value and appends it to the tweets container
    $('.tweets-container').append($tweet);
  }
};

const createTweetElement = function(data) {
  const $tweet = $(`
    <article class="tweet">
      <header>
        <span class="user-profile">
          <img class="user-avatar" src="${data.user.avatars}" alt="profile picture">
            ${data.user.name}
        </span>
        <span class="user-handle">
          ${data.user.handle}
        </span>
      </header>
      <p>${data.content.text}</p>
      <footer>
        <span class="tweet-age">
          ${data.created_at}
        </span>
        <span>
        <i class="fa-solid fa-flag fa-sm"></i>
        <i class="fa-solid fa-retweet fa-sm"></i>
        <i class="fa-solid fa-heart fa-sm"></i>
        </span>
      </footer>
    </article>
  `);
  return $tweet;
};

$(document).ready(function() {
  renderTweets(data);

  // Event listener for Submit
  $(".new-tweet form").on("submit", (event) => {
    event.preventDefault();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $('#tweet-text').serialize(),
      success: () => {
        console.log("Success! 😎", $('#tweet-text').val());
      },
      error: (error) => {
        console.log("Error! ☹️ ", error);
      }
    });
  });

});