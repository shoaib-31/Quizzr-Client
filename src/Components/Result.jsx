import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Result = () => {
  const { _id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST}/results/getResult/${_id}`
        );
        const data = response.data;
        setResult(data);
      } catch (error) {
        console.error("Error fetching quiz information", error.message);
      }
    };

    fetchResult();
  }, [_id]);

  return (
    <Main loading={result == null}>
      {result ? (
        <>
          <div>
            <CircularProgressbar
              value={result.totalMarks}
              maxValue={result.correctMarks * result.totalQues}
              text={`${(
                (result.totalMarks * 100) /
                (result.totalQues * result.correctMarks)
              ).toFixed(2)}%`}
            />
          </div>
          <Content>
            <BigBold>Result</BigBold>
            <Marks>
              Total Marks:&nbsp;
              <span
                style={{
                  color:
                    (result.totalMarks / result.correctMarks) *
                      result.totalQues <
                    0.33
                      ? "red"
                      : "green",
                }}
              >
                {result.totalMarks}/{result.correctMarks * result.totalQues}
              </span>
            </Marks>
            <Marks>
              Correct Marks:&nbsp;
              <span style={{ color: "green" }}>
                {result.correctMarks * result.correctQuestions}
              </span>
            </Marks>
            <Marks>
              Wrong Marks:&nbsp;
              <span style={{ color: "red" }}>
                {result.correctQuestions * result.correctMarks -
                  result.totalMarks}
              </span>
            </Marks>
            <Marks>
              Correct Questions:&nbsp;
              <span style={{ color: "green" }}>{result.correctQuestions}</span>
            </Marks>
            <Marks>
              Wrong Questions:&nbsp;
              <span style={{ color: "red" }}>{result.wrongQuestions}</span>
            </Marks>
            <Marks>
              Unattempted Questions:&nbsp;
              <span style={{ color: "green" }}>
                {result.totalQues -
                  result.correctQuestions -
                  result.wrongQuestions}
              </span>
            </Marks>
          </Content>
        </>
      ) : (
        <Preloader />
      )}
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
  justify-content: center;
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

const BigBold = styled.div`
  font-size: 3rem;
  color: #757575;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem 0;
`;

const Content = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-wrap: wrap;
`;

const Marks = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  align-items: center;
  margin: 0.5rem 0;
`;

export default Result;
