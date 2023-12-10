import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizTime: false,
  },
  reducers: {
    toggleQuiz: (state, action) => {
      state.quizTime = !state.quizTime;
    },
  },
});

export const { toggleQuiz } = quizSlice.actions;
export default quizSlice.reducer;
