import { createSlice } from "@reduxjs/toolkit";

/**
 * 사이드바 state 관리 위해 생성, 추후 화면 스타일과 관련된 state 추가될 수 있음
 */

const initialState = {
  sidebar: true, // 0.3초 후 반영
  closeAnimation: false, // 닫을때 true로 변경
  openAnimation: false, // 열때 true로 변경
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebar = action.payload;
    },

    closeSidebar: (state, action) => {
      state.closeAnimation = action.payload;
    },
    // openSidebar: (state, action) => {
    //   state.openAnimation = action.payload;
    //   state.closeAnimation = !action.payload;
    // },
  },
});

const { reducer, actions } = layoutSlice;

export const { toggleSidebar, closeSidebar } = actions;

export default reducer;
