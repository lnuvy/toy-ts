import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SubmitButton: React.FC<Props> = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.secondColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  padding: 12px 24px;
  min-width: 120px;
`;

export default SubmitButton;
