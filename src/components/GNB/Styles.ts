import styled from "@emotion/styled";

type SidebarProps = {
  toggle: boolean;
};

/* background-color: ${({ theme }) => theme.palette.text1}; */
export const BurgerIcon = styled.label<SidebarProps>`
  width: 30px;
  height: 20px;
  display: block;
  position: relative;
  cursor: pointer;

  & > span {
    display: block;
    height: 2px;
    width: 30px;

    position: absolute;
    left: 0;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.palette.gray1};

    &:nth-of-type(1) {
      ${({ toggle }) => (toggle ? "top: 50%; transform: rotate(45deg);" : "top: 0;")};
    }
    &:nth-of-type(2) {
      top: 50%;
      ${({ toggle }) => (toggle ? "opacity: 0;" : "top: 50%;")};
    }
    &:nth-of-type(3) {
      ${({ toggle }) => (toggle ? "top: 50%; transform: rotate(-45deg);" : "top: 100%;")};
    }
  }
`;
