import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 50px;
  flex-wrap: wrap;
  padding: 30px;
  align-items: center;
  justify-content: start;
  column-gap: 20px;
  background-color: ${({ theme }) => theme.palette.gray5};
  min-height: 70vh;
`;
