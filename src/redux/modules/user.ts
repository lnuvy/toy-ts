import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: true,
  isLogin: false,
  project: [],
  Sprint: [],
  success: null,
};

export const loginAxios = (data: any) => {
  return async function (dispatch: any) {
    console.log(data);

    dispatch(loginUser(true));
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.success = action.payload;
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
