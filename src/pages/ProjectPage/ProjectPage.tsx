import React from "react";
import ElInput from "@components/ElInput";
import ElButton from "@components/ElButton";
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
      <ElInput type="text" label="프로젝트명" />
      <ElInput type="text" label="프로젝트 상세" />
      <ElButton onClick={handleClickAddProject}>추가하기</ElButton>
    </AuthLayout>
  );
};

export default ProjectPage;
