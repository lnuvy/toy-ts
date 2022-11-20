import Portal from "@modal/Portal";
import React from "react";
import { Background, Content } from "./Styles";

interface Props {
  show?: boolean;
  children: JSX.Element | JSX.Element[] | String;
}

const CommonModal: React.FC<Props> = ({ children }) => {
  return (
    <Portal>
      <Background className="flex-row">
        <Content
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
          }}
        >
          {children}
        </Content>
      </Background>
    </Portal>
  );
};

export default CommonModal;
