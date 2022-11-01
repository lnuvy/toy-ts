import AuthLayout from "@pages/AuthLayout";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  // console.log(projectId);

  useEffect(() => {
    if (projectId) {
      // api
    }
  }, [projectId]);

  return <AuthLayout>Project Page {projectId}</AuthLayout>;
};

export default ProjectDetail;
