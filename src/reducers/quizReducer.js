import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    answers: [],
    time: null,
  },
  reducers: {
    clearQuestion: (state, action) => {
      state.questions = [];
    },
  },
});

export const { clearQuestion } = quizSlice.actions;
export default quizSlice.reducer;
