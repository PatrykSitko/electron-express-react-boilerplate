import { SET_INITIAL_ROUTE } from "./types";

export default (route) => ({
  type: SET_INITIAL_ROUTE,
  payload: { initialRoute: route },
});
