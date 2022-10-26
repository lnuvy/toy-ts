import styled from "@emotion/styled";

export const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  /* background-color: #fafafa; */

  border: 1px solid ${({ theme }) => theme.palette.borderColor};

  &:hover {
    background-color: ${({ theme }) => theme.palette.hoverColor};
  }
`;
