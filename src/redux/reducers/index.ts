import LoginReducer from "@reducers/Login.reducer";
import { combineReducers } from "redux";

const root = combineReducers({ session: LoginReducer });

export default root;
