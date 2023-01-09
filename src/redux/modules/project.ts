import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
  sprint: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    project: (state, action) => {
      // project: action.payload.data.data, // ASK: payload에 적절한값을 바로 넣어줄것
      state.project = action.payload;
    },

    addProject: (state, action) => {
      // add~
    },

    deleteProject: (state, action) => {
      // delete ~
    },

    updateProject: (state, action) => {
      // update~
    },

    sprint: (state, action) => {
      state.project = state.project;
      state.sprint = action.payload;
    },
  },
});

const { reducer, actions } = projectSlice;

export const { project, addProject, deleteProject, updateProject, sprint } = actions;

export default reducer;
