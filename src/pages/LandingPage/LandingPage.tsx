import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Wrapper, ProjectContainer } from "./Styles";
import Card from "@components/Card/Card";
import MainSearchBar from "@components/MainSearchBar";
import GlobalSideBar from "@components/GSB/GlobalSideBar";
import AuthLayout from "@pages/AuthLayout";

function LandingPage() {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state: RootState) => state.user!.isLoading);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);
  // const toggleChange = () => {
  //   setToggleMenu(!toggleMenu);
  //   setToggleBar(!toggleBar);
  // };
  // const onMenuClick = () => {
  //   setToggleMenu(!toggleMenu);
  //   setToggleBar(!toggleBar);
  // };

  //modal창
  // const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

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
      <MainSearchBar />
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
