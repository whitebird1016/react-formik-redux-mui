import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createWouterHook } from "redux-first-history/wouter";
import { createBrowserHistory } from "history";
import createRootReducer from "../reducers";
import thunk from "redux-thunk";
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    //other options if needed
  });
// const middlewares = [thunk, routerMiddleware(history)];
// const enhancers = [applyMiddleware(...middlewares)];
const middlewares = [routerMiddleware, thunk];

export const store = createStore(
  createRootReducer(routerReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const history = createReduxHistory(store);
//if you use @reach/router
export const reachHistory = reachify(history);
//if you use wouter
export const wouterUseLocation = createWouterHook(history);
