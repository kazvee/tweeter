/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
          ${timeago.format(data.created_at)}
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

$(document).ready(function(tweets) {

  // Fetch tweets from database and display on page
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: (tweets) => {
        renderTweets(tweets);
        console.log("Tweets are loaded! 🐦", tweets);
      },
      error: (error) => {
        console.log("Error loading tweets! ☹️ ", error);
      }
    });
  };
  loadTweets(tweets);

  // Event listener for Submit
  $(".new-tweet form").on("submit", (event) => {
    event.preventDefault();
    if (!$("#tweet-text").val().trim().length) {
      alert("You cannot post an empty tweet! 🐧");
      return;
    }
    if ($("#tweet-text").val().trim().length > 140) {
      alert("You cannot post such a long tweet! 🦜");
      return;
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $('#tweet-text').serialize(),
        success: () => {
          console.log("Success! 😎", $('#tweet-text').val());
          $('#tweet-text').val("");
          $(".counter").val(140);
          $(".tweets-container").empty();
          loadTweets(tweets);
        },
        error: (error) => {
          console.log("Error! ☹️ ", error);
        }
      });
    }

  });

});