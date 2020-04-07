'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Signed-up Successfully!')
  document.getElementById('sign-up').reset()
}

const signUpFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error on Sing-up!')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Signed-in Successfully!')
  $('#sign-out').removeClass('hide')
  $('#cpb').removeClass('hide')
  $('#sub').addClass('hide')
  $('#sib').addClass('hide')
  $('.item-group').removeClass('hide')
  $('.info').addClass('hide')
  store.user = data.user
  document.getElementById('sign-in').reset()
}

const signInFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error on Sign-in!')
  document.getElementById('sign-in').reset()
}

const signOutSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Signed-out Successfully!')
  $('.item-group').addClass('hide')
  $('#content').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#cpb').addClass('hide')
  $('#sub').removeClass('hide')
  $('#sib').removeClass('hide')
  $('#create-item').addClass('hide')
  $('.info').removeClass('hide')
}

const signOutFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error on Sign-out!')
}

const changePasswordSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Password changed Successfully!')
  document.getElementById('change-password').reset()
}

const changePasswordFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error on changing password!')
  document.getElementById('change-password').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
