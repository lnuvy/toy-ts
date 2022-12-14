import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RootState } from "@redux/store";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PageLayout from "@pages/PageLayout";
import gravatar from "gravatar";
import { ImageWrapper } from "./Styles";
import { useName } from "./queries";
function EditUserPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const { email, userName, userId } = useSelector((state: RootState) => state.user.currentUser);

  const { mutate: updateusername } = useName();

  const onSubmit = async (data: any) => {
    setLoading(true);
    let result = {
      id: userId,
      ...data,
    };
    updateusername(result);
    setLoading(false);
  };

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "center" }}>
          <h3>프로필 수정하기</h3>
        </div>
        <ImageWrapper>
          <img src={gravatar.url(`${email}`, { s: "220px", d: "retro" })}></img>
        </ImageWrapper>

        <label>Name</label>
        <input placeholder={userName} {...register("name", { required: true, maxLength: 10 })} />
        {errors.name && errors.name.type === "required" && <p>빈칸을 채워주세요</p>}
        {errors.name && errors.name.type === "maxLength" && <p>최대 10글자</p>}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" />
      </form>
    </PageLayout>
  );
}

export default EditUserPage;
