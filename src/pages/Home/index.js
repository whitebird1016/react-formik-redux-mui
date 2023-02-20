import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleClick = () => {
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  return (
    <>
      <> WELCOME! {user && user?.firstname + user?.lastname + user?.email} </>
      <Box onClick={handleClick}>sign out</Box>
    </>
  );
};
export default Home;
