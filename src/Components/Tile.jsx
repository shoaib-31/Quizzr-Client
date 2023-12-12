import styled from "styled-components";
import Quiz from "../assets/quiz.svg";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns-tz";

const convertMongoDate = (mongoDate) => {
  const formattedDate = format(new window.Date(mongoDate), "dd-MM-yyyy", {
    timeZone: "Asia/Kolkata",
  });
  return formattedDate;
};

const Tile = ({ data, created }) => {
  const navigate = useNavigate();
  const { title, dateCompleted, createdDate, resultId, author, _id } =
    data || {};
  console.log(createdDate);
  return (
    <Main
      onClick={() => {
        navigate(created ? `/quiz/instructions/${_id}` : `/result/${resultId}`);
      }}
    >
      <Title>
        <Svg src={Quiz} /> &nbsp;&nbsp; {title}
      </Title>
      <Date>
        {created
          ? `Created On : ${convertMongoDate(createdDate)}`
          : `Completed On :${convertMongoDate(dateCompleted)}`}
      </Date>
      <Date>Created By: {author}</Date>
    </Main>
  );
};
const Main = styled.div`
  height: 3rem;
  border-radius: 2px;
  display: flex;
  width: 100%;
  border-radius: 5px;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
`;
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const Svg = styled.img`
  width: 2rem;
  aspect-ratio: 1;
`;
const Date = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;
export default Tile;
