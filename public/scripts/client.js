/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Eleanor Roosevelt",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@eRoosevelt"
    },
    "content": {
      "text": "No one can make you feel inferior without your consent."
    },
    "created_at": 1461116232227
  };

  const createTweetElement = function(tweetData) {
    let $tweet = $(`
    <article class="tweets-container">
      <header>
        <span class="user-profile">
          <img class="user-avatar" src="${tweetData.user.avatars}" alt="profile picture">
            ${tweetData.user.name}
        </span>
        <span class="user-handle">
          ${tweetData.user.handle}
        </span>
      </header>
      <p>${tweetData.content.text}</p>
      <footer>
        <span class="tweet-age">
          ${tweetData.created_at}
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

  const $tweet = createTweetElement(tweetData);

  console.log($tweet);
  $('.container').append($tweet);

});