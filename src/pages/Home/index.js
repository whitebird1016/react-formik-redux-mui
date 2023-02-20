import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accessTokenData } from "../../actions/auth";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.removeItem("refreshToken");
    navigate("/");
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(accessTokenData({ accessToken: accessToken }));
    }
  }, [localStorage.getItem("accessToken")]);
  return (
    <>
      <> WELCOME! {user && user?.firstname + user?.lastname + user?.email} </>
      <Box onClick={handleClick}>sign out</Box>
    </>
  );
};
export default Home;
