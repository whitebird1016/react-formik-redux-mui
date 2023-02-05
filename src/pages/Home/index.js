import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [session, setSession] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!!localStorage.getItem("token")) {
      setSession(true);
    } else {
      setSession(false);
    }
    setFirstname(JSON.parse(localStorage.getItem("user"))?.user?.firstname);
    setLastname(JSON.parse(localStorage.getItem("user"))?.user?.lastname);
  }, []);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {session ? <> WELCOME! {firstname + lastname}</> : <>session error</>}{" "}
      <Box onClick={handleClick}>sign out</Box>
    </>
  );
};
export default Home;
