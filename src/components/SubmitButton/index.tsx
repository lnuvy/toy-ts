import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const SubmitButton: React.FC<Props> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.secondColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  padding: 12px 24px;
  min-width: 120px;
`;

export default SubmitButton;
