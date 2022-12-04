import ElInput from "@components/el-input";
import ElButton from "@components/el-button";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import styled from "@emotion/styled";
import { useAddProjectMutation } from "./queries";
import { useInputs } from "@hooks/useInput";
import ElDropdown from "@components/el-dropdown";

const ProjectPage = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  const [project, onChangeInputs] = useInputs({ title: "", details: "" });

  const { mutate: addProjectMutate } = useAddProjectMutation();

  const handleClickAddProject = () => {
    const data = {
      userId: currentUser.userId!,
      projectName: project.title,
      projectDetails: project.details,
    };
    addProjectMutate(data);
  };

  return (
    <>
      <LoginBox>
        <h3>Add Project</h3>
        <ElInput name="title" value={project.title} onChange={onChangeInputs} label="프로젝트명" />
        <ElInput name="details" value={project.details} onChange={onChangeInputs} label="프로젝트 상세" />
        <ElButton onClick={handleClickAddProject}>추가하기</ElButton>
      </LoginBox>

      {/* <br /> */}
      {/* <ElDropdown>드롭다운?</ElDropdown> */}
    </>
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
  max-width: 600px;
  margin: 0 auto;

  box-shadow: 12px 24px 24px #ededed;
`;

export default ProjectPage;
