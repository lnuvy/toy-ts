import { ClassNames } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface Props {
  size?: 32 | 28 | 24 | 20 | 18 | 16 | 15 | 14 | 13 | 12 | 11 | 10;
  color?:
    | "secondColor"
    | "personalDark"
    | "personalDefault"
    | "personalLight1"
    | "personalLight2"
    | "personalLight3"
    | "gray1"
    | "gray2"
    | "gray3"
    | "gray4"
    | "gray5"
    | "black"
    | "white";

  weight?: 400 | 600 | 700 | 800;

  disabled?: boolean;
  pointer?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  padding?: string;
  margin?: string;
}

const FontStyle = styled.p<Props>`
  margin: ${({ margin }) => (margin ? margin : "0")};
  color: ${({ theme, color }) => (color ? theme.palette[color] : "#000")};
  font-size: ${({ size }) => (size ? `${size}px;` : `16px`)};
  vertical-align: center;
  padding: ${({ padding }) => (padding ? padding : "0")};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  /* margin: 10px; */
`;

const ElFont = (props: Props) => {
  return (
    <FontStyle className={props.className} {...props}>
      {props.children}
    </FontStyle>
  );
};

export default ElFont;
