import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: true,
    userInfo: {
      name: "Shoaib Akhtar",
      email: "shoaibakmasood@gmail.com",
      phone: 9125216099,
      college: "IIT Roorkee",
      totalQuizGiven: 0,
      totalQuizCreated: 0,
    },
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
