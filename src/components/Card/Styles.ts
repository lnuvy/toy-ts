import styled from "@emotion/styled";

export const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.palette.gray3};
  &:hover {
    background-color: ${({ theme }) => theme.palette.gray5};
  }
`;
