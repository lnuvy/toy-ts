import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RootState } from "@redux/store";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PageLayout from "@pages/PageLayout";
import { useProject } from "./queries";

function EditProjectPage() {
  const { projectId } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutate: updateProject } = useProject();

  const onSubmit = async (data: any) => {
    setLoading(true);
    let result = {
      projectId: projectId,
      ...data,
    };
    //console.log(result);
    updateProject(result);
    setLoading(false);
  };

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "center" }}>
          <h3>프로젝트 수정하기</h3>
        </div>

        <label>ProjectName</label>
        <input {...register("projectName", { required: true, maxLength: 10 })} />
        {errors.name && errors.name.type === "required" && <p>빈칸을 채워주세요</p>}
        {errors.name && errors.name.type === "maxLength" && <p>최대 10글자</p>}

        <label>ProjectDetails</label>
        <input {...register("projectDetails", { required: true, maxLength: 30 })} />
        {errors.name && errors.name.type === "required" && <p>빈칸을 채워주세요</p>}
        {errors.name && errors.name.type === "maxLength" && <p>최대 30글자</p>}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" />
      </form>
    </PageLayout>
  );
}

export default EditProjectPage;
