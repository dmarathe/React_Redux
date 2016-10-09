var types = require('../constants/ActionTypes');

module.exports.pinDoc = function addDoc(id) {
  return {
    type: types.PIN_DOCUMENT,
    id: id
  };
}

module.exports.deleteDoc = function deleteDoc(id) {
  return {
    type: types.DELETE_DOCUMENT,
    id: id
  };
}

module.exports.unpinDoc = function addDoc(id) {
  return {
    type: types.UNPIN_DOCUMENT,
    id: id
  };
}

module.exports.receivedDocs = function receivedDocs(docs) {
  
  return {
    type: types.RECEIVED_DOCUMENTS,
    documents: docs
  };
}
