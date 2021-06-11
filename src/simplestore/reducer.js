import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import beerReducer from "./beer";

export default combineReducers({
  bugs: bugsReducer,
  beer: beerReducer,
});
