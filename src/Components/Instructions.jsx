import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import Stopwatch from "../assets/stopwatch.svg";
import axios from "axios";
import Preloader from "./Preloader";
import { setDuration } from "../reducers/quizReducer";
import { useDispatch } from "react-redux";

const Instructions = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [quizInfo, setQuizInfo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchQuizInfo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST}/quiz/instructions/${_id}`
        );
        const data = response.data;
        setQuizInfo(data);
        dispatch(setDuration(data.duration));
      } catch (error) {
        console.error("Error fetching quiz information", error.message);
      }
    };

    fetchQuizInfo();
  }, []);

  const handleStartQuiz = () => {
    navigate(`/quiz/${_id}`);
  };

  return (
    <Main loading={quizInfo == null}>
      {quizInfo ? (
        <>
          <BigBold>Instructions</BigBold>
          <Content>{quizInfo.instructions}</Content>
          <Marks>
            Positive Marks:{" "}
            <span style={{ color: "green" }}>{quizInfo.correctMarks}</span>
          </Marks>
          <Marks>
            Negative Marks:{" "}
            <span style={{ color: "red" }}>{quizInfo.wrongMarks}</span>
          </Marks>
          <Marks>
            Total Marks: {quizInfo.correctMarks * quizInfo.totalQues}
          </Marks>
          <Marks>
            <img style={{ width: "2rem", height: "2rem" }} src={Stopwatch} />{" "}
            Duration: {quizInfo.duration} minutes
          </Marks>
          <Submit onClick={handleStartQuiz}>Start Quiz</Submit>
        </>
      ) : (
        <Preloader />
      )}
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
  justify-content: ${(props) => (props.loading ? "center" : "flex-start")};
  align-items: ${(props) => (props.loading ? "center" : "flex-start")};
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

const Loading = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
`;

export default Instructions;
