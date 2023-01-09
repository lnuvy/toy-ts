import React, { useState } from "react";
import ElInput from "@components/el-input";
import ElButton from "@components/el-button";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { useInputs } from "@hooks/useInput";
import { useParams } from "react-router-dom";
import { useSaveJob } from "./queries";
import DatePicker from "react-datepicker";
import { AddSprintBox } from "./style";

const AddPage = () => {
  const { sprintId } = useParams();

  const [job, onChangeInputs] = useInputs({ toDo: "", detail: "" });
  const [start, setStart] = useState(new Date());
  const [end, setend] = useState(new Date());
  const workerList = [1];
  const { mutate: savejob } = useSaveJob();

  const handleClickAddSprint = () => {
    const data = {
      sprintId: sprintId!,
      toDo: job.toDo,
      detail: job.detail,
      start: job.start,
      end: job.end,
      workerList: workerList,
    };
    console.log(data);
    savejob(data);
  };
  return (
    <AddSprintBox>
      <h3>Add Sprint</h3>
      <ElInput name="toDo" value={job.toDo} onChange={onChangeInputs} label="toDo" />
      <ElInput name="detail" value={job.detail} onChange={onChangeInputs} label="detail" />
      {/*<input name="start" type="date" value={start} onChange={setStart} />*/}
      <div>
        <DatePicker selected={start} dateFormat="yyyy/MM/dd" onChange={(date: Date) => setStart(date)} />
      </div>
      <DatePicker selected={end} dateFormat="yyyy/MM/dd" onChange={(date: Date) => setend(date)} />

      <ElButton onClick={handleClickAddSprint}>추가하기</ElButton>
    </AddSprintBox>
  );
};
export default AddPage;
