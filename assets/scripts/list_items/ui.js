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
  $('.breadcrumb').removeClass('hide') // DO NOT FORGET TO ADD @ singOutSuccess
  store.user = data.user
  document.getElementById('sign-in').reset()
}

const signInFailure = function () {
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Error on Sing-in!')
  document.getElementById('sign-in').reset()
}

const showItemsSuccess = function (data) {
  console.log(data)
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Items showing Successfully!')
  $('#it').text('has ' + `${data}`)
  // for (let i = 0; i < data.length; i++) {
  //   $('#it').text('hoppa ' + `${data[i]}` + ' hop!')
  // }
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
  showItemsSuccess,
  showItemsFailure
}
