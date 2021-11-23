import { combineReducers } from "redux";
import getProReducer from "./getPro.reducer";
const rootReducer = combineReducers({
  getProState: getProReducer,
});
export default rootReducer;
