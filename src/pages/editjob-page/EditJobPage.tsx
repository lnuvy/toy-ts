import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EditJobBox } from "./Styles";
import ElInput from "@components/el-input";
import ElButton from "@components/el-button";
import { useInputs } from "@hooks/useInput";
import { useParams } from "react-router-dom";
import { useUpdateJob } from "@pages/joblist-page/queries";
function EditJobPage() {
  const { jobId } = useParams();
  const [edit, onChangeInputs] = useInputs({ toDo: "", jobDetail: "" });
  const { mutate: updateJob } = useUpdateJob();

  const handleClick = () => {
    const data = {
      jobId: jobId!,
      toDo: edit.toDo,
      jobDetail: edit.jobDetail,
    };
    updateJob(data);
  };
  return (
    <>
      <EditJobBox>
        <h3>EDIT JOB</h3>
        <ElInput name="toDo" value={edit.toDo} onChange={onChangeInputs} label="TODO" />
        <ElInput name="jobDetail" value={edit.jobDetail} onChange={onChangeInputs} label="DETAIL" />
        <ElButton onClick={handleClick}>수정하기</ElButton>
      </EditJobBox>
    </>
  );
}

export default EditJobPage;
