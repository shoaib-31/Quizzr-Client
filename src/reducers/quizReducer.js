import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizTime: false,
    duration: 0,
  },
  reducers: {
    toggleQuiz: (state, action) => {
      state.quizTime = !state.quizTime;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
});

export const { toggleQuiz, setDuration } = quizSlice.actions;
export default quizSlice.reducer;
