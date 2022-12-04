import React from "react";
import { ProjectType } from "@typing/DB";
import { Wrapper } from "./Styles";

interface Props {
  onClick: () => void;
  project: ProjectType;
}

const SidebarProjectCard: React.FC<Props> = ({ project, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <h3>{project.projectName}</h3>

      <p>{project.projectDetail}</p>
    </Wrapper>
  );
};

export default SidebarProjectCard;
