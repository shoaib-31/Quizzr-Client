import styled from "styled-components";
import Tile from "./Tile";
import Arrow from "../assets/right-arrow.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from "./Preloader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [latestQuizzes, setLatestQuizzes] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizzesResponse = await axios.get(
          `${import.meta.env.VITE_HOST}/quiz/getAll`
        );
        const sortedQuizzes = quizzesResponse.data.sort((a, b) => {
          return new Date(b.dateCreated) - new Date(a.dateCreated);
        });
        setLatestQuizzes(sortedQuizzes.slice(0, 4));

        const resultsResponse = await axios.get(
          `${import.meta.env.VITE_HOST}/results/getAllResults`
        );
        const sortedResults = resultsResponse.data.sort((a, b) => {
          return new Date(b.dateCreated) - new Date(a.dateCreated);
        });
        setCompletedQuizzes(sortedResults.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Main loading={loading}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BigBold>Latest Quizzes</BigBold>
          {latestQuizzes.map((quiz) => (
            <Tile key={quiz.id} created={true} data={quiz} />
          ))}
          <SeeAll
            onClick={() => {
              navigate("/quiz");
            }}
          >
            See All&nbsp;&nbsp;
            <img style={{ width: "2rem", height: "2rem" }} src={Arrow} />
          </SeeAll>
          <BigBold>Completed Quizzes</BigBold>
          {completedQuizzes.map((quiz) => (
            <Tile key={quiz.id} data={quiz} />
          ))}
          <SeeAll
            onClick={() => {
              navigate("/my-quizzes");
            }}
          >
            See All&nbsp;&nbsp;
            <img style={{ width: "2rem", height: "2rem" }} src={Arrow} />
          </SeeAll>
        </>
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
  justify-content: ${(props) => (props.loading ? "center" : "flex-start")};
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
  margin-bottom: 1rem 0;
`;

const SeeAll = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0;
  background-color: #483ae5;
  border-radius: 4px;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #2a1f9f;
  }
`;

export default Dashboard;
