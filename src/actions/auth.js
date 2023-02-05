import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../types";
import { requestFail, requestPending, requestSuccess } from "../utills/api";
import { loginApi, signupApi } from "../services/authService";
import { push } from "redux-first-history";
import { toast } from "react-toastify";

export const login = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: requestPending(LOGIN_REQUEST) });
      const response = await loginApi(data);
      const { user, token } = response;
      if (user && token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: requestSuccess(LOGIN_REQUEST),
          payload: {
            user,
          },
        });
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
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({ type: requestPending(SIGNUP_REQUEST) });
      const response = await signupApi(data);
      const { user, token } = response;
      if (user && token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: requestSuccess(SIGNUP_REQUEST),
          payload: {
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
