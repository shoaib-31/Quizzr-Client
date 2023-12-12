import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Tile from "./Tile";
import Preloader from "./Preloader";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST}/quiz/getAll`
        );
        setQuizzes(response.data);
        setFilteredQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes", error.message);
      }
    };

    fetchQuizzes();
  }, []);

  const handleSearch = () => {
    const filtered = quizzes.filter((quiz) =>
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuizzes(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Main loading={quizzes.length === 0}>
      {quizzes.length === 0 ? (
        <Preloader />
      ) : (
        <>
          <div style={{ display: "flex", width: "100%" }}>
            <SearchBar
              type="text"
              placeholder="Search Quizzes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <SearchButton onClick={handleSearch}>Search</SearchButton>
          </div>
          {filteredQuizzes.map((quiz) => (
            <Tile key={quiz._id} created={true} data={quiz} />
          ))}
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
  font-size: 1.2rem;
  background-color: #483ae5;
  color: white;
  border: none;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2a1f9f;
  }
`;

export default Quizzes;
