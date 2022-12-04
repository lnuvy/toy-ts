import styled from "@emotion/styled";

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.gray3};

  &:hover {
    background-color: ${({ theme }) => theme.palette.gray5};
  }

  & > h3 {
    margin: 0.5rem;
  }

  & > p {
    margin: 0.2rem;
    width: 90%;
  }
`;
