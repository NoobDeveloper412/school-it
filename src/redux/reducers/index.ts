import {
  connectRouter as ConnectRouterReducer,
  RouterState,
} from "connected-react-router";
import { History, LocationState } from "history";
import { Reducer, combineReducers } from "redux";

import LoginReducer from "@reducers/Login.reducer";

/**
 * Higher order function that will provide history to global app state
 */
const createRootReducer = (history: History) =>
  combineReducers({
    /* Nasty type-casting workaround */
    router: ConnectRouterReducer(history) as Reducer<
      RouterState<LocationState>
    >,
    /* Rest of app reducers */
    session: LoginReducer,
  });

export default createRootReducer;
