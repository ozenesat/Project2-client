'use strict'
const ui = require('./ui')
const api = require('./api')
// const store = require('./store.js')
const getFormFields = require('../../../lib/get-form-fields')

// creates a new user on server
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// sings in the user into the related id acc.
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onShowItems = function () {
  event.preventDefault()
  api.showItems()
    .then(ui.showItemsSuccess)
    .catch(ui.showItemsFailure)
}

// clear the user feedbacks.
const clear = function () {
  $('.alert-danger').addClass('hide')
  $('.alert-success').addClass('hide')
}

module.exports = {
  onSignUp,
  onSignIn,
  onShowItems,
  clear
}
