import React from "react";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { ChannelsWrap, MenuScroll, Title } from "./Styles";
import { ProjectType } from "@typing/DB";
import SidebarProjectCard from "@components/SidebarProjectCard/SidebarProjectCard";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const recentUpdateDummy: ProjectType[] = [
  {
    projectId: new Date().getTime() + 1,
    projectName: "dummy1",
    projectDetail: "dummy1...",
    projectLeader: 123,
    memberList: [],
  },
  {
    projectId: new Date().getTime() + 2,
    projectName: "dummy2",
    projectDetail: "dummy2...",
    projectLeader: 123,
    memberList: [],
  },
  {
    projectId: new Date().getTime() + 3,
    projectName: "dummy3",
    projectDetail: "dummy3...",
    projectLeader: 123,
    memberList: [],
  },
];

const GlobalSideBar = () => {
  const navigate = useNavigate();
  const { closeAnimation } = useSelector((state: RootState) => state.layout);

  const moveToProject = useCallback(
    (id: number) => {
      navigate(`/project/${id}`);
    },
    [navigate],
  );

  return (
    <ChannelsWrap close={closeAnimation}>
      <Title>Recent Update</Title>
      <MenuScroll>
        {recentUpdateDummy.map((project) => {
          return (
            <SidebarProjectCard
              key={project.projectId}
              project={project}
              onClick={() => moveToProject(project.projectId)}
            />
          );
        })}
      </MenuScroll>
    </ChannelsWrap>
  );
};

export default GlobalSideBar;
