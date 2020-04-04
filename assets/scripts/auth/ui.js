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
  $('#it').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#cpb').removeClass('hide')
  $('#sub').addClass('hide')
  $('#sib').addClass('hide')
  $('#it').addClass('hide')
  $('.breadcrumb').removeClass('hide')
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
  $('.breadcrumb').addClass('hide')
  $('#it').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#cpb').addClass('hide')
  $('#sub').removeClass('hide')
  $('#sib').removeClass('hide')
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

const showItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Items showing Successfully!')
  $('#it').removeClass('hide')
  $('#it').text(' ')

  for (let i = 0; i < data.list_items.length; i++) {
    $('#it').append('<li>  list title is "' + `${data.list_items[i].title}` + '" </li>')
    $('#it').append('<li>  list description is "' + `${data.list_items[i].description}` + '" </li>')
    $('#it').append('<li>  list due date is "' + `${data.list_items[i].due_on}` + '" </li>')
    $('#it').append('<li>  list complete status is "' + `${data.list_items[i].completed}` + '" </li>')
    $('#it').append('<br>')
  }
}

const showItemsFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error showing items!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  showItemsSuccess,
  showItemsFailure
}
