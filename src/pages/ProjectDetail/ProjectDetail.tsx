import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  // console.log(projectId);

  useEffect(() => {
    if (projectId) {
    }
  }, [projectId]);

  return <>Project Page {projectId}</>;
};

export default ProjectDetail;
