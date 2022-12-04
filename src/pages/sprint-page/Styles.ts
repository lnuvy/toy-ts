import styled from "@emotion/styled";

export const AddSprintBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray5};
  max-width: 600px;
  margin: 0 auto;
  font-family: "LINESeedKR-Bd";
  box-shadow: 12px 24px 24px #ededed;
`;

export const SprintContainer = styled.div`
  margin-top: 50px;
  flex-wrap: wrap;
  padding: 30px;
  align-items: center;
  justify-content: start;
  column-gap: 20px;
  background-color: ${({ theme }) => theme.palette.gray5};
`;
