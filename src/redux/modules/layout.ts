import { createSlice } from "@reduxjs/toolkit";

/**
 * 사이드바 state 관리 위해 생성, 추후 화면 스타일과 관련된 state 추가될 수 있음
 */

const initialState = {
  sidebar: true,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    // 사이드바 on/off 제어
    toggleSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
  },
});

const { reducer, actions } = layoutSlice;

export const { toggleSidebar } = actions;

export default reducer;
