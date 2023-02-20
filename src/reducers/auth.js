import { createReducer } from "@reduxjs/toolkit";

import { requestSuccess, requestFail } from "../utills/api";
import {
  GETUSER,
  LOGIN_REQUEST,
  REFRESH_TOKEN_REQUEST,
  SIGNUP_REQUEST,
} from "../types";

const initialState = {
  user: null,
  status: "INIT",
  error: null,
  accessToken: "",
  refreshToken: "",
  isLoggedIn: "",
};

export default createReducer(initialState, {
  [requestSuccess(LOGIN_REQUEST)]: (state, { payload }) => ({
    ...state,
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
    status: requestSuccess(LOGIN_REQUEST),
    user: payload.user,
    isLoggedIn: true,
  }),

  [requestFail(LOGIN_REQUEST)]: (state, { payload }) => ({
    ...state,
    accessToken: "null",
    refreshToken: "null",
    status: requestFail(LOGIN_REQUEST),
    isLoggedIn: false,
    user: "",
  }),
  [requestSuccess(GETUSER)]: (state, { payload }) => ({
    ...state,
    user: payload.user,
    isLoggedIn: true,
  }),

  [requestFail(GETUSER)]: (state, { payload }) => ({
    ...state,
    user: "",
    isLoggedIn: false,
  }),
  [requestSuccess(SIGNUP_REQUEST)]: (state, { payload }) => ({
    ...state,
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
    status: requestSuccess(SIGNUP_REQUEST),
    user: payload.user,

    isLoggedIn: true,
  }),

  [requestFail(SIGNUP_REQUEST)]: (state, { payload }) => ({
    ...state,
    accessToken: "null",
    refreshToken: "null",
    status: requestFail(SIGNUP_REQUEST),
    isLoggedIn: false,
    user: "",
  }),
  [requestSuccess(REFRESH_TOKEN_REQUEST)]: (state, { payload }) => ({
    ...state,
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
    status: requestSuccess(REFRESH_TOKEN_REQUEST),
    user: payload.user,
    isLoggedIn: true,
  }),
  [requestFail(REFRESH_TOKEN_REQUEST)]: (state, { payload }) => ({
    ...state,
    accessToken: "null",
    refreshToken: "null",
    status: requestFail(REFRESH_TOKEN_REQUEST),
    isLoggedIn: false,
    user: "",
  }),
});
