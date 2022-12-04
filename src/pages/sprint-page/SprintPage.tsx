import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSprintInit } from "./api";
import { useGetSprintInit } from "./queries";
import { SprintContainer } from "./Styles";
const SprintPage = () => {
  const { projectId } = useParams();
  console.log(projectId);
  {
    /*
    const {data:SprintInit}=useGetSprintInit(projectId);
    
    */
  }
  useEffect(() => {
    if (projectId) {
      getSprintInit(projectId).then((res) => {
        console.log(res);
      });
    }
  }, [projectId]);

  return (
    <>
      <SprintContainer></SprintContainer>
    </>
  );
};

export default SprintPage;
