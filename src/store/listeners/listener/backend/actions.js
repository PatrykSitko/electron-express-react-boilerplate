export default (store) => {
  fetch(`http://localhost:${store.getState().state.port}/store/actions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(store.getState()),
  })
    .then((res) => res.json())
    .then((dispatcher) => {
      Object.entries(dispatcher).forEach(([type, payload]) =>
        store.dispatch({ type, payload }),
      );
    });
};
