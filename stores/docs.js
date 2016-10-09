var assign = require('object-assign');
var types = require('../constants/ActionTypes');
var createStore = require('redux').createStore;
var _ = require('underscore');

var initialState = [];

function docs(state, action) {
  state = state || initialState
  switch (action.type) {
  case types.PIN_DOCUMENT:
    var index = _.findIndex(state, {id: action.id});
    var doc = state.splice(index, 1);
    // add pinned element to front
    state.unshift(assign({}, doc[0], { pined: true }));
    return state.slice(0);

  case types.UNPIN_DOCUMENT:
    var index = _.findIndex(state, {id: action.id});
    var doc = state.splice(index, 1);
    // push element to end
    state.push(assign({}, doc[0], { pined: false }));
    return state.slice(0);

  case types.DELETE_DOCUMENT:
  return state.filter(function(doc) {
    return doc.id !== action.id
  });

  case types.RECEIVED_DOCUMENTS:
  if (action.documents) {
    state = action.documents.slice(0);
  }
  return state;
  break;

  default:
    return state;
  }
}

module.exports = createStore(docs, initialState);
