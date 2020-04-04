'use strict'
const ui = require('./ui')
const api = require('./api')
// const store = require('./store.js')
const getFormFields = require('../../../lib/get-form-fields')

const onShowItems = function () {
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

const addHandlers = () => {
  $('#all-items').on('click', onShowItems)
  $('#create-item').on('submit', onCreateItem)
}

// clear function deleted here since there is one at auth!

module.exports = {
  addHandlers
}
