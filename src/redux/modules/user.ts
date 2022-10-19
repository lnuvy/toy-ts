import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: true,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      // 회원가입
    },

    loginUser: (state, action) => {
      // currentUser: action.payload.data.data,
      state.currentUser = action.payload;
      state.isLoading = false;
    },

    logoutUser: (state, action) => {
      state.currentUser = null;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = userSlice;

export const { registerUser, loginUser, logoutUser } = actions;

export default reducer;
