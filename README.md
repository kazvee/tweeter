# Tweeter 🐣

Tweeter is a single-page Twitter clone. It uses HTML, CSS, SASS, JS, jQuery, and AJAX for the front-end, and Node and Express for the back-end.


## Final Product

**Video of functionality:**

<video src="https://user-images.githubusercontent.com/109990289/198e575d-ce26-4269-bf38-631e0c7a2a39.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 width-fit" style="max-height:640px;">
</video>

**View of 2-column desktop layout:**

!["View of 2-column desktop layout"](/docs/2-column.jpg)

**View of single-column layout for Tablets:**

!["Screenshot of single-column layout"](/docs/tablet-layout.jpg)

**View of single-column layout for Smartphones:**

!["Screenshot of single-column layout"](/docs/smartphone-layout.jpg)

**View of new tweet form with `Write a new tweet` toggle button (top right):**

!["Screenshot of new tweet form with `Write a new tweet` toggle button (top right)"](/docs/new-tweet.jpg)

**View of `Back to Top` button (bottom right):**

!["Screenshot of `Back to Top` button (bottom right)"](/docs/back-to-top.jpg)

**View of Empty Tweet warning message:**

!["Screenshot of Empty Tweet warning message"](/docs/empty-tweet-warning.jpg)

**View of Tweet is Too Long warning message:**

!["Screenshot of Tweet is Too Long warning message"](/docs/too-long-tweet-warning.jpg)


## Purpose

This project was created by [me](https://github.com/kazvee) as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/en/web-development-flex-program).


## Features

- Single Page Application
  - Seamless user experience, the page is not refreshed during GET or POST tweet requests
- Responsive Design
  - Supports various device sizes, transitions smoothly between Smartphone, Tablet, and Desktop views
- Real-time Tweet Length Counter
  - Users receive visual feedback on the length of their tweet as they type
- Content Validation
  - Error handling for empty tweets or tweets that are too long


## Stretch / Extra Features

- Compose button for new tweets
  - Click the lightly-animated `Write a new tweet` button to bring the text input field into focus and start tweeting
- Scroll to Top button
  - Scroll back up with one click of the `Back to Top` button to activate the text input field and compose a new tweet
- Users can add a `Green Checkmark` (`✅`) to their profiles *completely free of charge!* 😏


## Planned Improvements

- Tweet reaction buttons (`Flag`/`Retweet`/`Like`) have hover-over animation effect but are not yet implemented
- Development to increase tweet length limit to 14**1** characters projected to begin early next year


## Dependencies

- [Express](https://expressjs.com)
- [Node.js](https://nodejs.org) v5.10.x or above
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Chance](https://www.npmjs.com/package/chance)
- [SASS](https://www.npmjs.com/package/sass)
- [jQuery](https://jquery.com/)


## Getting Started

1. Fork this repository to your own Github account.
2. Clone your fork onto your local device.
3. Install all dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. Start tweeting! 🐦