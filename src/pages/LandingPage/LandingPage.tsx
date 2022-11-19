import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProjectContainer } from "./Styles";
import MainSearchBar from "@components/MainSearchBar";
import ProjectCarousel from "@components/project-common/ProjectCarousel";
import ElFont from "@components/ElFont";
import ElButton from "@components/ElButton";
import { useGetProjects } from "./queries";
import { RootState } from "@redux/store";

function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: RootState) => state.user);
  const { data: projectList } = useGetProjects(currentUser.userId!);

  const length = projectList?.length;

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODOS: 검색 결과 axios 통신
  };

  return (
    <>
      <ElFont size={24} weight={600}>
        Project Search
      </ElFont>

      <form onSubmit={onSearch} style={{ display: "flex" }}>
        <MainSearchBar />
        &nbsp;
        <button>검색</button>
      </form>
      <ProjectContainer>
        <ProjectCarousel />

        {!length && (
          <ElButton
            onClick={() => {
              navigate("/projectPage");
            }}
          >
            <ElFont size={16} color="white">
              + 프로젝트 추가하기
            </ElFont>
          </ElButton>
        )}
      </ProjectContainer>
    </>
  );
}

export default LandingPage;
