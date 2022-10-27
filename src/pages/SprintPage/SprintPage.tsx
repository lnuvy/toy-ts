import AuthLayout from "@pages/AuthLayout";
import React from "react";
import { useParams } from "react-router-dom";

const SprintPage = () => {
  const { projectId } = useParams();
  console.log(projectId);

  return <AuthLayout>SprintPage {projectId}</AuthLayout>;
};

export default SprintPage;
