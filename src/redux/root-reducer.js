import { combineReducers } from "redux";
import countryReducers from "./reducer";

const rootReducer = combineReducers({
  data: countryReducers,
});

export default rootReducer;
