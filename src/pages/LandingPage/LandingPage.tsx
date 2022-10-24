import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProjectContainer } from "./Styles";
import Card from "@components/Card/Card";
import MainSearchBar from "@components/MainSearchBar";
import AuthLayout from "@pages/AuthLayout";

function LandingPage() {
  const dispatch = useDispatch();
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODOS: 검색 결과 axios 통신
  };

  useEffect(() => {
    // TODOS: projectList Dispatch
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
      <Link style={{ float: "right" }} to="/ProjectPage">
        ADD Project
      </Link>
    </AuthLayout>
  );
}

export default LandingPage;
