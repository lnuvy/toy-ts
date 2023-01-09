import React, { useState } from "react";
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
  const [radio, setradio] = useState([1, 2]);
  const [checkValue, setValue] = useState(1);
  const onChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const { mutate: addSprintMutate } = useAddSprintMutation(projectId as string);

  const handleClickAddSprint = () => {
    console.log(checkValue);
    const data = {
      projectId: projectId!,
      sprintName: sprint.title,
      sprintDetails: sprint.details,
      type: checkValue,
    };
    addSprintMutate(data);
  };
  return (
    <>
      <AddSprintBox>
        <h3>Add Sprint</h3>
        <ElInput name="title" value={sprint.title} onChange={onChangeInputs} label="스프린트 명" />
        <ElInput name="details" value={sprint.details} onChange={onChangeInputs} label="스프린트 디테일" />
        {radio.map((value: any, i: any) => (
          <div key={i}>
            <input type="radio" name="radio" value={value} checked={checkValue == value} onChange={onChange} />
            {value}
            &nbsp;
            {value === 1 ? "Joblist" : "Code"}
          </div>
        ))}
        <ElButton onClick={handleClickAddSprint}>추가하기</ElButton>
      </AddSprintBox>
    </>
  );
};
export default AddPage;
