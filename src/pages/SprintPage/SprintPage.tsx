import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSprintInit } from "./api";

const SprintPage = () => {
  const { projectId } = useParams();
  console.log(projectId);

  useEffect(() => {
    if (projectId) {
      getSprintInit(projectId).then((res) => {
        console.log(res);
      });
    }
  }, [projectId]);

  return <>SprintPage {projectId}</>;
};

export default SprintPage;
