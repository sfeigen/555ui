//REACT / REDUX DEPS
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

//REDUCERS
import VAVComponentReducer from "./VAVComponentReducer";

const rootReducer = combineReducers({
  VAV: VAVComponentReducer,
  routerReducer
});

export default rootReducer;
