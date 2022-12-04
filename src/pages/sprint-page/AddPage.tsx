import React from "react";
import ElInput from "@components/el-input";
import ElButton from "@components/el-button";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { useInputs } from "@hooks/useInput";
import { useParams } from "react-router-dom";
import { useAddSprintMutation } from "./queries";
import { AddSprintBox } from "./Styles";

const AddPage = () => {
  const { projectId } = useParams();

  const [sprint, onChangeInputs] = useInputs({ title: "", details: "" });

  const { mutate: addSprintMutate } = useAddSprintMutation();

  const handleClickAddSprint = () => {
    const data = {
      projectId: projectId!,
      sprintName: sprint.title,
      sprintDetails: sprint.details,
    };
    addSprintMutate(data);
  };
  return (
    <>
      <AddSprintBox>
        <h3>Add Sprint</h3>
        <ElInput name="title" value={sprint.title} onChange={onChangeInputs} label="스프린트 명" />
        <ElInput name="details" value={sprint.details} onChange={onChangeInputs} label="스프린트 디테일" />
        <ElButton onClick={handleClickAddSprint}>추가하기</ElButton>
      </AddSprintBox>
    </>
  );
};
export default AddPage;
