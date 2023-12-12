import React, { useState } from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [quizInfo, setQuizInfo] = useState({
    title: "",
    questions: [
      {
        question: "",
        index: 0,
        options: [
          {
            option: "",
            isCorrect: false,
          },
        ],
      },
    ],
    duration: 0,
    instructions: "",
    correctMarks: 0,
    wrongMarks: 0,
  });
  const quesArr = [...quizInfo.questions];
  const handleChange = (e) => {
    setQuizInfo({
      ...quizInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...quizInfo.questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      question: e.target.value,
    };

    setQuizInfo({
      ...quizInfo,
      questions: updatedQuestions,
    });
  };
  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...quizInfo.questions];
    updatedQuestions[questionIndex].options[optionIndex] = {
      option: e.target.value,
      isCorrect: e.target.checked,
    };

    setQuizInfo({
      ...quizInfo,
      questions: updatedQuestions,
    });
  };
  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...quizInfo.questions];
    updatedQuestions[questionIndex].options.push({
      option: "",
      isCorrect: false,
    });

    setQuizInfo({
      ...quizInfo,
      questions: updatedQuestions,
    });
  };
  const handleAddQuestion = () => {
    setQuizInfo((prevQuizInfo) => ({
      ...prevQuizInfo,
      questions: [
        ...prevQuizInfo.questions,
        {
          question: "",
          options: [
            {
              option: "",
              isCorrect: false,
            },
          ],
        },
      ],
    }));
  };
  const handleCreateQuiz = async (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_HOST}/quiz/create`,
          quizInfo
        );
        console.log(response.data);
        navigate("/my-quizzes");
        window.location.reload();
      } catch (error) {
        console.error("Error creating quiz", error.message);
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <Main>
      <BigBold>Create a Quiz:</BigBold>
      <form onSubmit={handleCreateQuiz}>
        <Input>
          <Name>Title of Quiz:</Name>
          <InputField
            type="text"
            name="title"
            required
            value={quizInfo.title}
            onChange={handleChange}
            placeholder="Title"
          />

          <Name>Duration(min):</Name>
          <InputField
            type="number"
            name="duration"
            required
            value={quizInfo.duration}
            onChange={handleChange}
            placeholder="Duration"
          />
        </Input>
        <Input>
          <Name>Positive Marks&#47;question:</Name>
          <InputField
            type="number"
            required
            name="correctMarks"
            value={quizInfo.correctMarks}
            onChange={handleChange}
            placeholder="Positive Marks"
          />
          <Name>Negative Marks&#47;question:</Name>
          <InputField
            type="number"
            name="wrongMarks"
            value={quizInfo.wrongMarks}
            onChange={handleChange}
            placeholder="Negative Marks"
          />
        </Input>
        <Input
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0",
          }}
        >
          <Name>Instructions:</Name>
          <InputTextArea
            type="text"
            rows="5"
            style={{ height: "10rem" }}
            name="instructions"
            value={quizInfo.instructions}
            onChange={handleChange}
            placeholder="Instructions"
          />
        </Input>
        <Accordion
          allowZeroExpanded
          style={{ border: "none", margin: " 0.5rem 0" }}
        >
          {quesArr.map((ques, index) => (
            <Question key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{ques.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Name>Question:</Name>
                <InputTextArea
                  type="text"
                  rows="1"
                  name="instructions"
                  value={ques.question}
                  onChange={(e) => handleQuestionChange(e, index)}
                  placeholder={`Question ${index + 1}`}
                />
                <Options>
                  {ques.options.map((option, optionIndex) => (
                    <Option key={optionIndex}>
                      <input
                        type="radio"
                        name={`correctOption-${index}`}
                        value={option.option}
                        checked={option.isCorrect}
                        required
                        onChange={(e) =>
                          handleOptionChange(e, index, optionIndex)
                        }
                      />
                      <input
                        style={{ padding: "0.5rem" }}
                        type="text"
                        value={option.option}
                        onChange={(e) =>
                          handleOptionChange(e, index, optionIndex)
                        }
                        placeholder={`Option ${optionIndex + 1}`}
                      />
                    </Option>
                  ))}
                  <AddOptionButton onClick={() => handleAddOption(index)}>
                    + Add Option
                  </AddOptionButton>
                </Options>
              </AccordionItemPanel>
            </Question>
          ))}
          <AddQuestionBtn onClick={handleAddQuestion}>
            + Add Question
          </AddQuestionBtn>
        </Accordion>
        <Submit type="submit">Create Quiz</Submit>
      </form>
    </Main>
  );
};
const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
`;
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
const Question = styled(AccordionItem)`
  border: 2px solid #3626b1;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;
const Options = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Option = styled.label`
  display: block;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  input {
    margin-right: 0.5rem;
  }
`;
const AddOptionButton = styled.button`
  margin: 0.5rem;
  background-color: #4735ce;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
  &:hover {
    background-color: #3626b1;
  }
`;
const AddQuestionBtn = styled.button`
  margin: 1rem 0;
  background-color: #4735ce;
  font-weight: 600;
  color: white;
  width: fit-content;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  &:hover {
    background-color: #3626b1;
  }
`;
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
const InputField = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #636363;
  width: 30%;
  font-family: "Roboto", sans-serif;
`;
const InputTextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 2px;
  width: 100%;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;
const Name = styled.div`
  font-size: 1.2rem;
  color: #000000;
  font-weight: 700;
  margin: 1rem 0;
`;
const BigBold = styled.div`
  font-size: 3rem;
  color: #3626b1;
  font-weight: 700;
  margin: 1rem 0;
`;
export default CreateQuiz;
