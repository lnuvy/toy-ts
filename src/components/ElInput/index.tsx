import styled from "@emotion/styled";
import React from "react";

interface Props {
  label: string;
  value: string | number;
  onChange: (e: any) => void;

  name?: string;
  type?: "text" | "number" | "password";
}

const ElInput: React.FC<Props> = ({ type = "text", name, label, value, onChange }) => {
  return (
    <Label>
      {label}
      <Input name={name} type={type} value={value} onChange={onChange} />
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
  width: 100%;
`;

export default ElInput;
