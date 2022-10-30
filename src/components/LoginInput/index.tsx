import styled from "@emotion/styled";
import React from "react";

interface Props {
  type: string;
  label: string;
}

const LoginInput: React.FC<Props> = ({ type, label }) => {
  return (
    <Label>
      {label}
      <Input type={type} />
    </Label>
  );
};

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: black;
  font-size: 14px;
  font-weight: 200;
`;

export default LoginInput;
