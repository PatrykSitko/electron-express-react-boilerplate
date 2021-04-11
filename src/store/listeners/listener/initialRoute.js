import setInitialRoute from "../../actions/setInitialRoute";
import { browserHistory } from "../../configuration";

export default (store) => {
  const { state } = store.getState();
  if (!state.initialRoute) {
    browserHistory.push("/");
    store.dispatch(setInitialRoute("/"));
  }
};
