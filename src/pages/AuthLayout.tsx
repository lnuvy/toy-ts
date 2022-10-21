import GlobalNavBar from "@components/GNB/GlobalNavBar";
import GlobalSideBar from "@components/GSB/GlobalSideBar";
import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <GlobalNavBar />
      <div className="content-container">
        <GlobalSideBar />
        <Content>{children}</Content>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  & > .content-container {
    height: calc(100vh - 44px);
    flex: 1;
    display: flex;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 1rem 2rem;
`;

export default AuthLayout;
