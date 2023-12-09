import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [current, setCurrent] = useState("");
  const location = useLocation();
  useEffect(() => {
    const handleUrlChange = () => {
      let currentUrl = window.location.pathname;
      let url = "";
      for (let index = 1; index < currentUrl.length; index++) {
        if (currentUrl[index] == "/") {
          break;
        }
        url += currentUrl[index];
      }
      setCurrent(url);
    };
    handleUrlChange();
  }, [location.pathname]);
  return (
    <Container>
      <StyledLink active={current === ""} onClick={() => setCurrent("")} to="/">
        Dashboard
      </StyledLink>
      <StyledLink
        active={current === "quiz"}
        onClick={() => setCurrent("quiz")}
        to="/quiz"
      >
        All Quizzes
      </StyledLink>
      <StyledLink
        active={current === "my-quizzes"}
        onClick={() => setCurrent("my-quizzes")}
        to="/my-quizzes"
      >
        My Quizzes
      </StyledLink>
      <StyledLink
        active={current === "profile"}
        onClick={() => setCurrent("profile")}
        to="/profile"
      >
        Profile
      </StyledLink>
    </Container>
  );
};
const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #040404;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
  color: ${(props) => (props.active ? "#000" : "#fff")};
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 1.5rem;
  border-radius: ${(props) => (props.active ? "-5px" : "none")};
  background-color: ${(props) => (props.active ? "#fff" : "#040404")};
`;
export default Navbar;
