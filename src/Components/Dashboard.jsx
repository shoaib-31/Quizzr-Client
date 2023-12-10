import styled from "styled-components";
import Tile from "./Tile";
import Arrow from "../assets/right-arrow.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <BigBold>BigBold Quizzes</BigBold>
      <Tile
        data={{
          title: "React Quiz",
          date: "2 Jan",
          author: "Shoaib Akhtar",
          created: true,
        }}
      />
      <Tile
        data={{
          title: "React Quiz",
          date: "2 Jan",
          author: "Shoaib Akhtar",
          created: true,
        }}
      />
      <Tile
        data={{
          title: "React Quiz",
          date: "2 Jan",
          author: "Shoaib Akhtar",
          created: true,
        }}
      />
      <Tile
        data={{
          title: "React Quiz",
          date: "2 Jan",
          author: "Shoaib Akhtar",
          created: true,
        }}
      />
      <SeeAll
        onClick={() => {
          navigate("/quiz");
        }}
      >
        See All&nbsp;&nbsp;
        <img style={{ width: "2rem", height: "2rem" }} src={Arrow} />
      </SeeAll>
      <BigBold>Completed Quizzes</BigBold>
      <Tile
        data={{
          title: "React Quiz",
          date: "2 Jan",
          author: "Shoaib Akhtar",
          created: false,
        }}
      />
      <Tile
        data={{
          title: "React Quiz",
          date: "2 Jan",
          author: "Shoaib Akhtar",
          created: false,
        }}
      />
      <Tile
        data={{
          title: "React Quiz",
          date: "2 Jan",
          author: "Shoaib Akhtar",
          created: false,
        }}
      />
      <SeeAll
        onClick={() => {
          navigate("/my-quizzes");
        }}
      >
        See All&nbsp;&nbsp;
        <img style={{ width: "2rem", height: "2rem" }} src={Arrow} />
      </SeeAll>
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
