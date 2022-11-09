import styled from "@emotion/styled";
import React from "react";

interface Props {
  size: number;
  onClick: () => void;
  src: string;
}

interface StyleProps {
  src: string;
  size: number;
}

const ElProfileImage: React.FC<Props> = (props) => {
  const { size, src, onClick } = props;

  const styles = {
    src,
    size,
    // ...
  };
  return <ImageCircle onClick={onClick} {...styles} />;
};

const ImageCircle = styled.div<StyleProps>`
  --size: ${({ size }) => size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default ElProfileImage;
