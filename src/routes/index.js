import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { accessTokenData, refreshAccessToken } from "../actions/auth";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/Home";
const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      console.log(accessToken, refreshToken);
      if (accessToken && refreshToken)
        await dispatch(accessTokenData({ accessToken: accessToken }));
      if (refreshToken && !accessToken)
        await dispatch(refreshAccessToken({ refreshToken: refreshToken }));
      if (!refreshToken) {
        localStorage.removeItem("accessToken");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<>error</>} />
    </Routes>
  );
};
export default Index;
