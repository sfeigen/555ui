import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";

//MIDDLEWARE
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export const history = createHistory();
const routerHistory = routerMiddleware(history);

//LOGGING
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, promise(), createLogger(), routerHistory));
const store = createStore(rootReducer, {}, enhancer);

//TO INDEX
export default store;
