import styled from "@emotion/styled";

export const InputWrap = styled.div`
  margin: 0;
`;

export const InputStyles = styled.input`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  outline: none;

  border-radius: 6px;
  line-height: 20px;
  padding: 5px 12px;

  &:focus {
    border-color: #0969da;
    box-shadow: inset 0 0 0 1px #0969da;
    outline: none;
    /* box-shadow: 0 0 0 1px #1264a3, 0 0 0 5px rgba(29, 155, 209, 0.3); */
  }
`;
