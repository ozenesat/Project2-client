'use strict'
const ui = require('./ui')
const api = require('./api')
// const store = require('./store.js')
const getFormFields = require('../../../lib/get-form-fields')

const onShowItems = function (event) {
  event.preventDefault()
  api.showItems()
    .then(ui.showItemsSuccess)
    .catch(ui.failure)
}

const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.failure)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  api.deleteItem($(event.target).data('id'))
    .then(function () {
      onShowItems(event)
    })
    .catch(ui.failure)
}

const onUpdateItemButton = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.showUpdateItemBar(id)
}

const onUpdateItem = function (event) {
  event.preventDefault()
  console.log('HEY!')
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateItem(id, data)
    .then(ui.updateItemSuccess)
    .catch(ui.failure)
}

// const onUpdateMealPlan = event => {
//   event.preventDefault()
//   const id = $(event.target).data('id')
//   const data = getFormFields(event.target)
//   api.updateMealPlan(id, data)
//     .then(ui.updateMealPlanSuccess)
//     .catch(ui.updateMealPlanFailure)
// }

const addHandlers = () => {
  $('#all-items').on('click', onShowItems)
  $('#create-item').on('submit', onCreateItem)
  $('.content').on('click', '.btn-danger', onDeleteItem)
  $('.content').on('click', '.btn-success', onUpdateItemButton)
  $('.content').on('submit', '.item-update', onUpdateItem)
}

// clear function deleted here since there is one at auth!

module.exports = {
  addHandlers
}
