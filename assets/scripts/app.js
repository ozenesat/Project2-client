'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./list_items/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // sign up for new user.
  $('#sign-up').on('submit', events.onSignUp)

  // sign in for registered user.
  $('#sign-in').on('submit', events.onSignIn)

  // show the all items lists
  $('#all-items').on('click', events.onShowItems)

  // clear the alerts from the page.
  $('body').on('click', events.clear)
})
