import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { accessTokenData, refreshAccessToken } from "../actions/auth";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/Home";
import jwt_decode from "jwt-decode";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   let accessToken = localStorage.getItem("accessToken");
  //   let refreshToken = localStorage.getItem("refreshToken");

  //   if (accessToken && refreshToken) {
  //     const decodedToken = jwt_decode(refreshToken);
  //     if (decodedToken.exp < Date.now() / 1000) {
  //       localStorage.removeItem("refreshToken");
  //       localStorage.removeItem("accessToken");
  //       navigate("/");
  //     } else {
  //       dispatch(accessTokenData({ accessToken: accessToken }));
  //     }
  //   }
  //   if (!accessToken && refreshToken) {
  //     console.log("k");
  //     dispatch(refreshAccessToken({ refreshToken: refreshToken }));
  //   }
  //   if ((!refreshToken && !accessToken) || (!refreshToken && accessToken)) {
  //     localStorage.removeItem("accessToken");
  //     navigate("/");
  //   }
  // }, [dispatch, navigate]);

  const REFRESH_INTERVAL = 1000; // 5 minutes

  useEffect(() => {
    const interval = setInterval(async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      if (accessToken) {
        const decodedAccessToken = jwt_decode(accessToken);
        if (decodedAccessToken.exp < Date.now() / 1000) {
          // Access token has expired, attempt to refresh
          if (refreshToken) {
            const decodedAccessToken2 = jwt_decode(refreshToken);
            if (decodedAccessToken2.exp < Date.now() / 1000) {
              localStorage.removeItem("refreshToken");
              navigate("/");
            } else {
              dispatch(refreshAccessToken({ refreshToken: refreshToken }));
            }
            // Send a request to your server to refresh the access token using the refresh token
            // Update the access token in local storage if the refresh is successful
            // If the refresh fails, clear the local storage and log the user out
          } else {
            // No refresh token found, clear the local storage and log the user out
            localStorage.removeItem("accessToken");
            navigate("/");
          }
        }
      } else {
        navigate("/");
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

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
