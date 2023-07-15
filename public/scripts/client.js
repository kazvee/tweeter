/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Show tweets array by creating and appending their HTML elements to the display container
const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweets-container').prepend($tweet);
  }
};

// Escape function to prevent Preventing XSS (Cross-Site Scripting)
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Takes in a tweet data object as a parameter and uses jQuery to create a tweet article element
// with the complete HTML structure of the provided tweet data
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
      <p class="new-tweet-text">${escape(data.content.text)}</p>
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

// AJAX GET request to the "/tweets" endpoint
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

// jQuery method used to ensure the code inside the callback function only executes after the DOM has finished loading
$(document).ready(function(tweets) {

  // Display and make active the new tweet text input field when `write a new tweet` button is clicked
  $(".write-new").on("click", function() {
    $("#tweet-text").trigger("focus");
  });

  // Event listener for Submit
  $(".new-tweet form").on("submit", (event) => {
    event.preventDefault();

    // Error handling for empty tweets
    if (!$("#tweet-text").val().trim().length) {
      const errorContainer = $(".error-container");
      if (errorContainer.is(":visible")) {
        errorContainer.slideUp("slow", function() {
          errorContainer.text("⚠️ Tweets cannot be empty. Please add content and try again. ⚠️");
          errorContainer.addClass("error-message");
          errorContainer.slideDown("slow");
        });
      } else {
        errorContainer.text("⚠️ Tweets cannot be empty. Please add content and try again. ⚠️");
        errorContainer.addClass("error-message");
        errorContainer.slideDown("slow");
      }
      return;
    }

    // Error handling for too-long tweets
    if ($("#tweet-text").val().trim().length > 140) {
      const errorContainer = $(".error-container");
      if (errorContainer.is(":visible")) {
        errorContainer.slideUp("slow", function() {
          errorContainer.text("⚠️ Tweets cannot be longer than 140 characters. Please shorten your message and try again. ⚠️");
          errorContainer.addClass("error-message");
          errorContainer.slideDown("slow");
        });
      } else {
        errorContainer.text("⚠️ Tweets cannot be longer than 140 characters. Please shorten your message and try again. ⚠️");
        errorContainer.addClass("error-message");
        errorContainer.slideDown("slow");
      }
      return;
    }

    // Clear error message and, if visible, slide it up
    const errorContainer = $(".error-container");
    if (!errorContainer.is(":hidden")) {
      errorContainer.slideUp("slow", function() {
        errorContainer.text("");
      });
    }

    // AJAX POST request to the "/tweets" endpoint
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
  });

  // Display `back to top` button on page scroll down
  const backToTopButton = $('.back-to-top');
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) {
      backToTopButton.addClass('show');
    } else {
      backToTopButton.removeClass('show');
    }
  });

  // On click, scroll page up and make active the the new tweet text input field
  backToTopButton.on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
    $("#tweet-text").trigger("focus");
  });

  loadTweets(tweets);

});