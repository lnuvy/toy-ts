import { createSlice } from "@reduxjs/toolkit";

type User = { userId: string; email: string; userName: string };

const initialUser: User = { userId: "", email: "", userName: "" };

const initialState = {
  currentUser: initialUser,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },

    logoutUser: (state, action) => {
      state.currentUser = initialUser;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = userSlice;

export const { loginUser, logoutUser } = actions;

export default reducer;
