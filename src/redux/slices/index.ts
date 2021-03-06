import SessionSlice from "@slices/Session.slice";
import { combineReducers } from "redux";

const root = combineReducers({
  /* Named app slices */
  session: SessionSlice,
});

export default root;
