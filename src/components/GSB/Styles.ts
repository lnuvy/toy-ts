import styled from "@emotion/styled";

export const ChannelsWrap = styled.nav`
  /* width: 20vw; */
  min-width: 260px;
  display: inline-flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.labelColor};
  color: rgb(188, 171, 188);
  vertical-align: top;
`;

export const Title = styled.button`
  width: 100%;
  height: 49px;
  text-align: left;
  border: none;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  font-weight: 500;
  font-size: 18px;
  background: transparent;
  overflow: hidden;
  padding: 0 54px 0 16px;
  margin: 0;
  color: white;
  cursor: pointer;
`;

export const SlackConnect = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  margin-top: 10px;
  padding: 5px 15px;
  &:hover {
    background: #340c35;
  }
`;

export const MenuScroll = styled.div`
  height: calc(100vh - 38px);
  overflow-y: auto;
`;
