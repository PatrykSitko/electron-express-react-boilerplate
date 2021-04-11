let store = {};
let dispatcher = {};

function getStore() {
  return { ...store };
}

function dispatch({ type, payload }) {
  dispatcher[type] = payload;
}

function setStore(value) {
  store = value;
}

function getDispatcher() {
  return dispatcher;
  dispatcher = {};
}

module.exports = { getStore, dispatch, setStore, getDispatcher };
