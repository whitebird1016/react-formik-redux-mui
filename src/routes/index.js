import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/Home";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!!localStorage.getItem("token") === false) {
      localStorage.removeItem("user");
    } else {
      navigate("/home");
    }
  }, [navigate]);

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
