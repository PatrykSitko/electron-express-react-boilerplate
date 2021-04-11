import setInitialRoute from "../../actions/setInitialRoute";
import { browserHistory } from "../../configuration";

export default (store) => {
  const { state } = store.getState();
  if (!state.initialRoute) {
    browserHistory.push(state["required!.initial-path"]);
    store.dispatch(setInitialRoute(state["required!.initial-path"]));
  }
};
