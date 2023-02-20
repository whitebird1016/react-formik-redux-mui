import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const handleClick = () => {
    localStorage.removeItem("refreshToken");
  };

  return (
    <>
      <> WELCOME! {user && user?.firstname + user?.lastname + user?.email} </>
      <Box onClick={handleClick}>sign out</Box>
    </>
  );
};
export default Home;
