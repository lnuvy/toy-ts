import {
  ProjectList,
  AddProject,
  DeleteProject,
  UpdateProject,
  Sprintinit,
  AddSprint,
  Sprint,
  SelectProject,
  SelectSprint,
} from "../types";

const initialState = {
  project: [],
  Sprint: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ProjectList:
      return {
        ...state,
        project: action.payload.data.data,
        isLoading: false,
      };
    case AddProject:
      return {
        ...state,
        isLoading: false,
      };
    case DeleteProject:
      return {
        ...state,
        isLoading: false,
      };
    case UpdateProject:
      return {
        ...state,
        isLoading: false,
      };
    case Sprintinit:
      return {
        ...state,
        Sprint: action.payload.data.data,
        isLoading: false,
      };
    case AddSprint:
      return {
        ...state,
      };
    case Sprint:
      return {
        ...state,
      };
    case SelectProject:
      return {
        ...state,
      };
    case SelectSprint:
      return {
        ...state,
      };
    default:
      return state;
  }
}
