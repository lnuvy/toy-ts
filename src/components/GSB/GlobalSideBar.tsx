import React from "react";
import { ChannelsWrap, MenuScroll, SlackConnect, Title } from "./Styles";

const GlobalSideBar = () => {
  return (
    <ChannelsWrap>
      <Title>Recent Update</Title>
      <MenuScroll>
        <div>
          <SlackConnect>
            <span style={{ cursor: "pointer" }}>Slack Connect</span>
          </SlackConnect>
        </div>
      </MenuScroll>
    </ChannelsWrap>
  );
};

export default GlobalSideBar;
