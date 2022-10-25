import React from "react";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { ChannelsWrap, MenuScroll, Title } from "./Styles";

const GlobalSideBar = () => {
  const { closeAnimation } = useSelector((state: RootState) => state.layout);

  return (
    <ChannelsWrap close={closeAnimation}>
      <Title>Recent Update</Title>
      <MenuScroll>
        <div>하단 메뉴들</div>
      </MenuScroll>
    </ChannelsWrap>
  );
};

export default GlobalSideBar;
