import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
  sprint: [], // ASK: camelCase 준수
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    projectList: (state, action) => {
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
  },
});

const { reducer, actions } = projectSlice;

export const { projectList, addProject, deleteProject, updateProject } = actions;

export default reducer;
