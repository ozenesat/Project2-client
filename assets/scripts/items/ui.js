'use strict'

const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')
const showItemsUpdateTemplate = require('../templates/item-updating.handlebars')

const showItemsSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Items showing Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
  store.list_items = data.list_items
  const showItemsHtml = showItemsTemplate({ list_items: data.list_items })
  $('.content').append(showItemsHtml)
}

const createItemSuccess = function (data) {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Item created Successfully!')
  // console.log(data + 'ui data')
  document.getElementById('create-item').reset()
}
const failure = function (data) {
//  console.log(data)
  $('.alert-danger').removeClass('hide')
  $('.alert-danger').text('Uh! There is an error here! Please try again later :)')
}

const showUpdateItemBar = function (id) {
  const targetItem = store.list_items.find(item => item.id === id)
  const showItemsUpdateHtml = showItemsUpdateTemplate({ item: targetItem })
  $(`#item${id}`).html(showItemsUpdateHtml)
}

const updateItemSuccess = function () {
  $('.alert-success').removeClass('hide')
  $('.alert-success').text('Item updated Successfully!')
  $('#create-item').addClass('hide')
  $('#content').removeClass('hide')
  $('#content').text(' ')
}

// const updateMealPlanSuccess = data => {
//   const showPlanHTML = showPlanTemplate({ plan: data.meal_plan })
//   $(`#meal-plan${data.meal_plan.id}`).html(showPlanHTML)
//   $('#user-message').removeClass('hidden')
//   $('#user-message').text('Meal Plan Updated')
// }

module.exports = {
  showItemsSuccess,
  createItemSuccess,
  showUpdateItemBar,
  updateItemSuccess,
  failure
}
