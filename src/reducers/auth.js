import { createReducer } from "@reduxjs/toolkit";

import { requestSuccess, requestFail } from "../utills/api";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../types";

const initialState = {
  user: null,
  status: "INIT",
  error: null,
};

export default createReducer(initialState, {
  [requestSuccess(LOGIN_REQUEST)]: (state, { payload }) => ({
    ...state,
    user: payload.user,
    status: requestSuccess(LOGIN_REQUEST),
  }),

  [requestFail(LOGIN_REQUEST)]: (state, { payload }) => ({
    ...state,
    user: null,
    error: payload,
    status: requestFail(LOGIN_REQUEST),
  }),

  [requestSuccess(SIGNUP_REQUEST)]: (state, { payload }) => ({
    ...state,
    user: payload.user,
    status: requestSuccess(SIGNUP_REQUEST),
  }),

  [requestFail(SIGNUP_REQUEST)]: (state, { payload }) => ({
    ...state,
    user: null,
    error: payload,
    status: requestFail(SIGNUP_REQUEST),
  }),
});
