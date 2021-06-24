import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import rootReducer from "@reducers/index";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export const history = createBrowserHistory();
/**
 * Why does rootReducer take history as an parameter?
 * - App's using connected-react-router. This 'addon' stores router history inside application store
 *
 * Yeah, but why?
 * - Redux thunk redirects
 */
const middleware = [thunk, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
