import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrap } from "./Styles";

interface Props {
  project: {
    memberList: string[];
    projectDetail: string;
    projectId: number;
    projectLeader: number;
    projectName: string;
  };
}

const Card: React.FC<Props> = ({ project }) => {
  const navigate = useNavigate();
  return (
    <Wrap onClick={() => navigate(`/project/${project.projectId}`)}>
      <h3>{project.projectName}</h3>
      <p>{project.projectDetail}</p>
    </Wrap>
  );
};

export default Card;
