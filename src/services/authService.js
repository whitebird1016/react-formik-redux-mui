import axios from "axios";
const baseURL = "http://localhost:8001";

export const loginApi = async (payload) => {
  try {
    const response = await axios.post(`${baseURL}/login`, payload);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throw new Error(response.data);
  } catch (error) {
    return error;
  }
};

export const signupApi = async (payload) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, payload);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throw new Error(response.data);
  } catch (error) {
    return error;
  }
};
