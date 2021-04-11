import bindWindowListeners from "./listener/window";
import bindHistoryListener from "./listener/history";
import bindGUUIDListener from "./listener/guuid";
import bindBackendActions from "./listener/backend/actions";
import bindInitialRoute from "./listener/initialRoute";

const slowLoop = setInterval;
const fastLoop = setInterval;

export default (store) => {
  bindInitialRoute(store);
  bindHistoryListener(store);
  bindWindowListeners(store);
  bindGUUIDListener(store);
  fastLoop(() => {
    bindBackendActions(store);
    // console.log(store.getState());
  });
};
