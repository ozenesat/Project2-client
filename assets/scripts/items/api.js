'use strict'

const config = require('../config')
const store = require('../store.js')

const showItems = function () {
  return $.ajax({
    url: config.apiUrl + '/list_items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/list_items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showItems,
  createItem
}
