import bindWindowListeners from "./listener/window";
import bindHistoryListener from "./listener/history";
import bindGUUIDListener from "./listener/guuid";

const slowLoop = setInterval;
const fastLoop = setInterval;

export default (store) => {
  bindHistoryListener(store);
  bindWindowListeners(store);
  bindGUUIDListener(store);
};
