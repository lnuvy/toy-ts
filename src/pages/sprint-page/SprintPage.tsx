import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSprintInit } from "./api";
import { useGetSprintList } from "./queries";
import { RootState } from "@redux/store";
import { sprint } from "@redux/modules/project";
import SprintList from "@components/sprint-common/SprintList";

const SprintPage = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const dispatch = useDispatch();
  //const { sprintlist } = useSelector((state: RootState) => state.project.sprint);

  const { data: SprintInit } = useGetSprintList(projectId);
  const length = SprintInit?.length;
  useEffect(() => {
    dispatch(sprint(SprintInit));
    console.log(SprintInit);
  });

  return <></>;
};

export default SprintPage;
