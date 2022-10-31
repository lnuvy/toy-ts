import React from "react";
import ElInput from "@components/ElInput";
import ElButton from "@components/ElButton";
import AuthLayout from "@pages/AuthLayout";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import styled from "@emotion/styled";

const ProjectPage = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  console.log(userInfo);

  const handleClickAddProject = () => {
    console.log("add");
  };

  return (
    <AuthLayout>
      <LoginBox>
        <h3>Add Project</h3>
        <ElInput type="text" label="프로젝트명" />
        <ElInput type="text" label="프로젝트 상세" />
        <ElButton onClick={handleClickAddProject}>추가하기</ElButton>
      </LoginBox>
    </AuthLayout>
  );
};

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray5};
`;

export default ProjectPage;
