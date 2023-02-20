import {
  GETUSER,
  LOGIN_REQUEST,
  REFRESH_TOKEN_REQUEST,
  SIGNUP_REQUEST,
} from "../types";
import { requestFail, requestPending, requestSuccess } from "../utills/api";
import {
  getUserInfo,
  loginApi,
  refreshAccess,
  signupApi,
} from "../services/authService";
import { push } from "redux-first-history";
import { toast } from "react-toastify";

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: requestPending(LOGIN_REQUEST) });
      const response = await loginApi(data);

      const { accessToken, refreshToken, user } = response;
      if (accessToken && refreshToken && user) {
        dispatch({
          type: requestSuccess(LOGIN_REQUEST),
          payload: {
            accessToken,
            refreshToken,
            user,
          },
        });
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch(push("/home"));
        toast("Login Success");
      } else {
        dispatch({
          type: requestFail(LOGIN_REQUEST),
          payload: response?.response?.data?.message,
        });
        toast(response?.response?.data?.message);
      }
    } catch (error) {
      dispatch({
        type: requestFail(LOGIN_REQUEST),
        payload: error?.response?.data.message,
      });
      toast(error?.response?.data.message);
    }
  };
};

export function signup(data) {
  return async (dispatch) => {
    try {
      dispatch({ type: requestPending(SIGNUP_REQUEST) });
      const response = await signupApi(data);
      const { accessToken, refreshToken, user } = response;
      if (accessToken && refreshToken && user) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch({
          type: requestSuccess(SIGNUP_REQUEST),
          payload: {
            accessToken,
            refreshToken,
            user,
          },
        });
        dispatch(push("/home"));
        toast("SignUp Success");
      } else {
        dispatch({
          type: requestFail(SIGNUP_REQUEST),
          payload: response?.response?.data?.message,
        });
        toast(response?.response?.data?.message);
      }
    } catch (error) {
      dispatch({
        type: requestFail(SIGNUP_REQUEST),
        payload: error?.response?.data?.message,
      });
      toast(error?.response?.data?.message);
    }
  };
}

export const refreshAccessToken = (data) => async (dispatch) => {
  if (!data) {
    dispatch({
      type: requestFail(REFRESH_TOKEN_REQUEST),
      payload: "Refresh token not found",
    });
    return;
  }
  try {
    const { accessToken } = await refreshAccess(data);
    console.log(data, accessToken, "Data");
    dispatch({
      type: requestSuccess(REFRESH_TOKEN_REQUEST),
      payload: { accessToken },
    });
    console.log("accessToken", accessToken);
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    dispatch({
      type: requestFail(REFRESH_TOKEN_REQUEST),
      payload: error.response.data.message,
    });
    throw error;
  }
};

export const accessTokenData = (data) => async (dispatch) => {
  try {
    const { user } = await getUserInfo(data);
    console.log(user, "user");
    dispatch({
      type: requestSuccess(GETUSER),
      payload: { user },
    });
  } catch (error) {
    dispatch({
      type: requestFail(GETUSER),
      payload: error.response.data.message,
    });
    throw error;
  }
};
