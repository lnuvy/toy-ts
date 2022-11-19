import GlobalNavBar from "@components/GNB/GlobalNavBar";
import GlobalSideBar from "@components/GSB/GlobalSideBar";
import styled from "@emotion/styled";
import { RootState } from "@redux/store";
import React from "react";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const { sidebar } = useSelector((state: RootState) => state.layout);

  return (
    <Wrapper toggle={sidebar}>
      <GlobalNavBar />
      <div className="content-container">
        {sidebar && <GlobalSideBar />}
        <Content isOpenSidebar={sidebar}>{children}</Content>
      </div>
    </Wrapper>
  );
};

interface WrapperProps {
  toggle: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  height: 100vh;

  & > .content-container {
    height: calc(100vh - 44px);
    flex: 1;
    display: flex;
  }
`;

const Content = styled.div<{ isOpenSidebar: boolean }>`
  width: ${({ isOpenSidebar }) => (isOpenSidebar ? "calc(100% - 260px);" : "calc(100%);")};
  padding: 1rem 2rem;
`;

export default AuthLayout;
