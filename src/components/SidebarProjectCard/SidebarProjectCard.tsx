import React from "react";
import { ProjectType } from "@typing/DB";
import { Wrapper } from "./Styles";

const SidebarProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Wrapper>
      <h3>{project.projectName}</h3>

      <p>{project.projectDetail}</p>
    </Wrapper>
  );
};

export default SidebarProjectCard;
