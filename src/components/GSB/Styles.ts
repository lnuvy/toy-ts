import styled from "@emotion/styled";

interface SidebarProps {
  // toggle: boolean;
  close: boolean;
}

export const ChannelsWrap = styled.nav<SidebarProps>`
  min-width: 260px;
  display: inline-flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.color1};
  color: rgb(188, 171, 188);
  vertical-align: top;
  position: relative;
  left: 0;
  transition: left 0.5s;

  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);

  ${({ close }) => (close ? "left: -500px;" : "left: 0;")};
`;
// /* ${({ open }) => open && "left: -500px;"} */

export const Title = styled.button`
  width: 100%;
  height: 49px;
  text-align: left;
  border: none;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  font-weight: 500;
  font-size: 18px;
  background: transparent;
  overflow: hidden;
  padding: 0 54px 0 16px;
  margin: 0;
  color: #000;
`;

export const UpdateList = styled.div`
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
