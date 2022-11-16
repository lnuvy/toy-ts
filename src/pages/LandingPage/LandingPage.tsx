import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProjectContainer } from "./Styles";
import Card from "@components/Card/Card";
import MainSearchBar from "@components/MainSearchBar";
import { getStorage } from "@utils/storage";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { useGetProjects } from "./queries";

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

  const { data } = useGetProjects(currentUser.userId!);

  console.log(data);

  return (
    <>
      Project Search
      <form onSubmit={onSearch} style={{ display: "flex" }}>
        <MainSearchBar />
        &nbsp;
        <button>검색</button>
      </form>
      <ProjectContainer>
        {project.map((p: Props) => {
          return <Card key={p.projectId} project={p} />;
        })}
      </ProjectContainer>
      <Link to="/projectPage">ADD Project</Link>
    </>
  );
}

export default LandingPage;
