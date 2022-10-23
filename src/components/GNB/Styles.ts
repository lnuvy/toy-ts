import styled from "@emotion/styled";

export const SidebarBtn = styled.div`
  width: 60px;
  height: 50px;
  background-color: transparent;
  border-radius: 8px;
  z-index: 50;
`;

type SidebarProps = {
  toggle: boolean;
};

export const BurgerIcon = styled.label<SidebarProps>`
  width: 30px;
  height: 20px;
  display: block;
  & > span {
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.text1};
    left: 0;
    width: 100%;
    position: absolute;
    transition: 0.3s;
    &:nth-of-type(1) {
      ${({ toggle }) => (toggle ? "top: 50%; transform: rotate(45deg);" : "top: 0;")};
    }
    &:nth-of-type(2) {
      top: 50%;
      ${({ toggle }) => (toggle ? "opacity: 0;" : "top: 50%;")};
    }
    &:nth-of-type(3) {
      ${({ toggle }) => (toggle ? "top: 50%;transform: rotate(-45deg);" : "top: 100%;")};
    }
  }
`;
