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

const deleteItem = function (id) {
  return $.ajax({
    url: config.apiUrl + '/list_items/' + id,
    method: 'delete',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateItem = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/list_items/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showItems,
  createItem,
  deleteItem,
  updateItem
}
