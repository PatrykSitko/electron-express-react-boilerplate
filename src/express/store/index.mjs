let store = {};
let dispatcher = {};

function getStore() {
  return { ...store };
}

function dispatch({ type, payload }) {
  dispatcher[type] = payload;
}

export function setStore(value) {
  store = value;
}

export function getDispatcher() {
  return dispatcher;
  dispatcher = {};
}

export default { getStore, dispatch };
