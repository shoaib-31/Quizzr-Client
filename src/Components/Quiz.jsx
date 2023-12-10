import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleQuiz } from "../reducers/quizReducer";

const Quiz = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleQuiz());
    return () => {
      dispatch(toggleQuiz());
    };
  }, [dispatch]);

  return <Main>Quiz</Main>;
};
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
export default Quiz;
