'use strict'

const config = require('../config')
const store = require('../store.js')

const signUp = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const showItems = function () {
  // console.log('HOP!')
  return $.ajax({
    url: config.apiUrl + '/list_items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  showItems
}
