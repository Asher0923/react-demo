import { combineReducers } from "redux";
import page1Reducer from "./page1Reducer";

export default combineReducers({
  page1: page1Reducer
});
