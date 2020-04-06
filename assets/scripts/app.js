'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const itemsEvents = require('./items/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

const cib = function () {
  $('#create-item').removeClass('hide')
  $('#content').addClass('hide')
}

$(() => {
  // sign up for new user.
  $('#sign-up').on('submit', authEvents.onSignUp)

  // sign in for registered user.
  $('#sign-in').on('submit', authEvents.onSignIn)

  // sign out for signed-in user.
  $('#sign-out').on('click', authEvents.onSignOut)

  // change password for registered user.
  $('#change-password').on('submit', authEvents.onChangePassword)

  // clear the alerts from the page.
  $('body').on('click', authEvents.clear)

  // list_items' table related events.
  itemsEvents.addHandlers()
})
