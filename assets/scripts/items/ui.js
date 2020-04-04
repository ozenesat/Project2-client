'use strict'

// const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')

const showItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Items showing Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')

  const showItemsHtml = showItemsTemplate({ list_items: data.list_items })
  $('.content').append(showItemsHtml)
}

const createItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Item created Successfully!')
  console.log(data + 'ui data')
  document.getElementById('create-item').reset()
}
const failure = function (data) {
//  console.log(data)
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Uh! There is an error here! Please try again later :)')
}

module.exports = {
  showItemsSuccess,
  createItemSuccess,
  failure
}
