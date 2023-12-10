import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import App from "../assets/app.svg";
import Exam from "../assets/exam.svg";
import QuizTest from "../assets/quiz-test.svg";
import Profile from "../assets/profile.svg";
import ProfileCircle from "../assets/profile-circle.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quizTime = useSelector((state) => state.quiz.quizTime);
  const name = useSelector((state) => state.user.userInfo.name);
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
    <Container show={quizTime}>
      <Company>Quizzr</Company>
      <StyledLink active={current === ""} onClick={() => setCurrent("")} to="/">
        <img style={{ width: "1.5rem", height: "1.5rem" }} src={App} />
        &nbsp;Dashboard
      </StyledLink>
      <StyledLink
        active={current === "quiz"}
        onClick={() => setCurrent("quiz")}
        to="/quiz"
      >
        <img style={{ width: "1.5rem", height: "1.5rem" }} src={Exam} />
        &nbsp;All Quizzes
      </StyledLink>
      <StyledLink
        active={current === "my-quizzes"}
        onClick={() => setCurrent("my-quizzes")}
        to="/my-quizzes"
      >
        <img style={{ width: "1.5rem", height: "1.5rem" }} src={QuizTest} />
        &nbsp;My Quizzes
      </StyledLink>
      <StyledLink
        active={current === "profile"}
        onClick={() => setCurrent("profile")}
        to="/profile"
      >
        <img style={{ width: "1.5rem", height: "1.5rem" }} src={Profile} />
        &nbsp;Profile
      </StyledLink>
      <Name>
        <img
          style={{ width: "1.5rem", height: "1.5rem" }}
          src={ProfileCircle}
        />
        &nbsp;{name}
      </Name>
    </Container>
  );
};
const Container = styled.div`
  width: ${(props) => (props.show ? "0" : "15%")};
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;
const Name = styled.div`
  color: #3626b1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
`;
const Company = styled.div`
  color: #3626b1;
  font-weight: 800;
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  border: 2px solid #3626b1;
  padding: 1rem;
  border-radius: 1rem;
`;
const StyledLink = styled(Link)`
  color: #3626b1;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  border-radius: ${(props) => (props.active ? "-5px" : "none")};
  background-color: ${(props) => (props.active ? "#d5d1ff" : "#fff")};
`;
export default Navbar;
