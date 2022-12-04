import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetRedux } from "@hooks/useGetRedux";
import { Wrapper } from "./Styles";
import { useGetSprints } from "./queries";
import ElFont from "@components/el-font";
import { useGetProjects } from "@pages/landing-page/queries";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

const ProjectDetail = () => {
  const { projectId } = useParams();

  // const { redux: user } = useGetRedux("user");
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { data: projects } = useGetProjects(currentUser.userId);

  // 프로젝트 상세올때 리덕스에 project 정보 싹다 주입하기
  // const { data: sprints, isSuccess } = useGetSprints(projectId);

  // console.log(isSuccess);
  // console.log(sprints);

  return <Wrapper>{/* <ElFont size={20} weight={600}>{project</ElFont> */}</Wrapper>;
};

export default ProjectDetail;
