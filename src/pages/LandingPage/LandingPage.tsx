import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProjectContainer } from "./Styles";
import Card from "@components/Card/Card";
import MainSearchBar from "@components/MainSearchBar";
import { getStorage } from "@utils/storage";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { getInit } from "./api";

function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state: RootState) => state.user);
  const [project, setProject] = useState([]);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODOS: 검색 결과 axios 통신
  };

  useEffect(() => {
    // 로그인 돼있는 상태인지 확인
    const isLogin = getStorage();
    if (!isLogin) {
      navigate("/login");
    } else {
      // const a = await getInit(userInfo.currentUser);
      // setProject();
    }
  }, [navigate]);

  return (
    <>
      Project Search
      <form onSubmit={onSearch} style={{ display: "flex" }}>
        <MainSearchBar />
        &nbsp;
        <button>검색</button>
      </form>
      <ProjectContainer>
        <Card />
        <Card />
        <Card />
      </ProjectContainer>
      <Link to="/projectPage">ADD Project</Link>
    </>
  );
}

export default LandingPage;
