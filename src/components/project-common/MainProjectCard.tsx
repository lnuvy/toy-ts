import React from "react";
import styled from "@emotion/styled";
import { ProjectType } from "@typing/DB";

interface Props {
  project: ProjectType;
}

const MainProjectCard: React.FC<Props> = ({ project }) => {
  return <Wrapper></Wrapper>;
};

export default MainProjectCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // size 조정 필요
  /* width: 70%; */
  height: 500px;
  /* background-color: tomato; */

  display: flex;
`;
