import AuthLayout from "@pages/AuthLayout";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSprintInit } from "./api";

const SprintPage = () => {
  const { projectId } = useParams();
  // console.log(projectId);

  useEffect(() => {
    if (projectId) {
      getSprintInit(projectId).then((res) => {
        console.log(res);
      });
      // console.log("useEffect: ", a);
    }
  }, [projectId]);

  return <AuthLayout>SprintPage {projectId}</AuthLayout>;
};

export default SprintPage;
