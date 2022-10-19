import { RegisterUser, LoginUser, LogoutUser } from "../types";

const initialState = {
  currentUser: null,
  isLoading: true,
  isLogin: false,
  project: [],
  Sprint: [],
  success: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RegisterUser:
      return {
        ...state,
        success: action.payload,
      };
    case LoginUser:
      return {
        ...state,
        currentUser: action.payload.data.data,
        isLoading: false,
      };
    case LogoutUser: {
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    }
  }
}
