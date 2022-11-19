import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProjectContainer } from "./Styles";
import Card from "@components/Card/Card";
import MainSearchBar from "@components/MainSearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { useGetProjects } from "./queries";
import ProjectCarousel from "@components/project-common/ProjectCarousel";
import NoContent from "@components/project-common/NoContent";
import Spinner from "@components/Spinner";

interface Props {
  memberList: string[];
  projectDetail: string;
  projectId: number;
  projectLeader: number;
  projectName: string;
}

function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: RootState) => state.user);
  const [project, setProject] = useState([]);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODOS: 검색 결과 axios 통신
  };

  const { data: projectList, isFetched } = useGetProjects(currentUser.userId!);
  // const projectList: any = [];
  console.log(projectList);

  return (
    <>
      Project Search
      <form onSubmit={onSearch} style={{ display: "flex" }}>
        <MainSearchBar />
        &nbsp;
        <button>검색</button>
      </form>
      <ProjectContainer>{isFetched ? <ProjectCarousel projectList={projectList} /> : <Spinner />}</ProjectContainer>
      <Link to="/projectPage">ADD Project</Link>
    </>
  );
}

export default LandingPage;
