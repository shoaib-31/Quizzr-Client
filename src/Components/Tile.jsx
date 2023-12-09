import styled from "styled-components";
import Quiz from "../assets/quiz.svg";
const Tile = ({ data }) => {
  const { title, date, author, created } = data || {};
  return (
    <Main>
      <Title>
        <Svg src={Quiz} /> &nbsp;&nbsp; {title}
      </Title>
      <Date>
        {created ? "Created By" : "Completed On"}: {date}
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
