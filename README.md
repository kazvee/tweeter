# Tweeter Project

Tweeter is a single-page Twitter clone. It uses HTML, CSS, JS, jQuery, and AJAX for the front-end, and Node and Express for the back-end.

## Final Product

*View of 2-colummn desktop layout:*

!["Screenshot of 2-columm desktop layout"](/docs/2-column-layout.jpg)

*View of single-column layout for smaller devices:*

!["Screenshot of single-column layout"](/docs/single-column-layout.jpg)

*View of new tweet form:*

!["Screenshot of new tweet form"](/docs/new-tweet.jpg)

*View of Back to Top button:*

!["Screenshot of Back to Top button"](/docs/back-to-top-button.jpg)

*View of Empty Tweet warning message:*

!["Screenshot of Empty Tweet warning message"](/docs/empty-tweet-warning.jpg)

*View of Tweet is Too Long warning message:*

!["Screenshot of Tweet is Too Long warning message"](/docs/too-long-tweet-warning.jpg)

*Verified User with Green Checkmark in profile:*

!["Screenshot of Verified User with Green Checkmark in profile"](/docs/verified-user.jpg)

## Purpose

This project was created by [me](https://github.com/karvok) as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/en/web-development-flex-program).

## Features

- Single Page Application
  - Seamless user experience, the page is not refreshed during GET or POST tweet requests
- Responsive Design
  - Site supports various device sizes, transisions smoothly between different screen resolution views
- Real-time Tweet Length Counter
  - Users receive real-time visual feedback of the character-length of their tweet as they type
- Content Validation
  - Error handling for empty tweets or tweets that are too long

## Stretch / Extra Features

- Compose button for new tweets
  - Click the lightly-animated `Write a new tweet` button to bring the text input field into focus and start tweeting
- Scroll to Top button
  - Scroll back up with one click of the `Back to Top` button to activate the text input field and compose a new tweet
- Users can add a `Green Checkmark` (`✅`) to their profiles *completely free of charge* 😏

## Planned Improvements
- Tweet reaction buttons (`Flag`/`Retweet`/`Like`) have hover-over animation effect but are not yet implemented
- Development to increase tweet length limit to 14**1** characters projected to begin early next year 😉

## Getting Started

1. Fork this repository to your own Github account.
2. Clone your fork onto your local device.
3. Install all dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. Start tweeting! 🐦

## Dependencies

- [Express](https://expressjs.com)
- [Node.js](https://nodejs.org) v5.10.x or above
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Chance](https://www.npmjs.com/package/chance)