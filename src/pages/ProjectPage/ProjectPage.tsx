import React from "react";
import LoginInput from "@components/LoginInput";
import SubmitButton from "@components/SubmitButton";
import AuthLayout from "@pages/AuthLayout";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

const ProjectPage = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  console.log(userInfo);

  const handleClickAddProject = () => {
    console.log("add");
  };

  return (
    <AuthLayout>
      <h3>Add Project</h3>
      <LoginInput type="text" label="프로젝트명" />
      <LoginInput type="text" label="프로젝트 상세" />
      <SubmitButton onClick={handleClickAddProject}>추가하기</SubmitButton>
    </AuthLayout>
  );
};

export default ProjectPage;
