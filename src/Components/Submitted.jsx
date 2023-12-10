import React from "react";
import styled from "styled-components";
import Done from "../assets/Done.gif";
import Arrow from "../assets/right-arrow.svg";
import { useNavigate } from "react-router-dom";
const Submitted = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <Gif src={Done} />
      <Submit>You Quiz has been Submitted Successfully!</Submit>
      <SubmitBtn
        onClick={() => {
          navigate("/my-quizzes");
        }}
      >
        Check Results{" "}
        <img style={{ width: "2rem", height: "2rem" }} src={Arrow} />
      </SubmitBtn>
    </Main>
  );
};
const Main = styled.div`
  background-color: white;
  width: 70%;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem 0 0 1rem;
  height: 90%;
  display: flex;
  align-items: center;
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
const Gif = styled.img`
  width: 50%;
  margin: 0 auto;
`;
const Submit = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
const SubmitBtn = styled.button`
  margin: 1rem 0;
  background-color: #4735ce;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  width: fit-content;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  &:hover {
    background-color: #3626b1;
  }
`;
export default Submitted;
