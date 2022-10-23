import React from "react";
import { ChannelsWrap, MenuScroll, Title } from "./Styles";

const GlobalSideBar = () => {
  return (
    <ChannelsWrap>
      <Title>Recent Update</Title>
      <MenuScroll>
        <div>하단 메뉴들</div>
      </MenuScroll>
    </ChannelsWrap>
  );
};

export default GlobalSideBar;
