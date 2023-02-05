import { combineReducers } from "redux";

import authReducer from "./auth";

const createRootReducer = (routerReducer) =>
  combineReducers({
    router: routerReducer,
    auth: authReducer,
  });

export default createRootReducer;
