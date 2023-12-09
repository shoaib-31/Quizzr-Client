import styled from "styled-components";
import Tile from "./Tile";
import { useEffect, useState } from "react";
const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  //  useEffect(() => {
  //    // Filter quizzes based on the search term
  //    const filtered = allQuizzes.filter((quiz) =>
  //      quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  //    );
  //    setFilteredQuizzes(filtered);
  //  }, [searchTerm, allQuizzes]);

  const handleSearch = () => {
    // Perform search when the search button is clicked
    // (You can also call this function from the "Enter" key event in the input)
    // For simplicity, let's log the search term for now
    console.log("Search Term:", searchTerm);
  };

  const handleKeyDown = (event) => {
    // Perform search when the "Enter" key is pressed
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Main>
      <SearchBar
        type="text"
        placeholder="Search Quizzes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
      <Tile
        data={{ title: "React Quiz", date: "2 Jan", author: "Shoaib Akhtar" }}
      />
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
const SearchBar = styled.input`
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 85%;
  border-radius: 5px;
  border: 2px solid #a7a7a7;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #483ae5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2a1f9f;
  }
`;
export default Quizzes;
