import { combineReducers } from "redux";

import reducer from "./Set";
import header from "./Header";
const rootReducer = combineReducers({
  reducer,
  header,
});

export default rootReducer;
