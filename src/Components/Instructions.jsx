import React from "react";
import styled from "styled-components";
import { quizInfo } from "./quizData";
import Stopwatch from "../assets/stopwatch.svg";
import { useNavigate } from "react-router-dom";
const Instructions = () => {
  const { instruction, correctMarks, wrongMarks, duration, totalQues } =
    quizInfo;
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz/123");
  };
  return (
    <Main>
      <BigBold>Instructions</BigBold>
      <Content>{instruction}</Content>
      <Marks>
        Positive Marks: <span style={{ color: "green" }}>{correctMarks}</span>
      </Marks>
      <Marks>
        Negative Marks: <span style={{ color: "red" }}>{wrongMarks}</span>
      </Marks>
      <Marks>Total Marks: {correctMarks * totalQues}</Marks>
      <Marks>
        <img style={{ width: "2rem", height: "2rem" }} src={Stopwatch} />{" "}
        Duration: {duration} minutes
      </Marks>
      <Submit onClick={handleStartQuiz}>Start Quiz</Submit>
    </Main>
  );
};
const Submit = styled.button`
  margin: 1rem 0;
  background-color: #4735ce;
  font-weight: 600;
  color: white;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  &:hover {
    background-color: #3626b1;
  }
`;
const BigBold = styled.div`
  font-size: 3rem;
  color: #757575;
  font-weight: 700;
  margin-bottom: 1rem 0;
`;
const Content = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
`;
const Marks = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;
const Main = styled.div`
  background-color: white;
  width: 70%;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem 0 0 1rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 3px;
    &:hover {
      background-color: #8f8f8f;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
export default Instructions;
