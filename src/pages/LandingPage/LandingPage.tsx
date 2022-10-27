import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProjectContainer } from "./Styles";
import Card from "@components/Card/Card";
import MainSearchBar from "@components/MainSearchBar";
import AuthLayout from "@pages/AuthLayout";
import { getStorage } from "@utils/storage";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { getInit } from "./api";

function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state: RootState) => state.user);

  console.log(userInfo);

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
      const a = getInit(isLogin);

      console.log("PersonalPage get요청 Init: ", a);
    }
  }, []);

  return (
    <AuthLayout>
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
    </AuthLayout>
  );
}

export default LandingPage;
