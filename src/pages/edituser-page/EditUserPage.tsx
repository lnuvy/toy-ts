import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RootState } from "@redux/store";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PageLayout from "@pages/PageLayout";
import gravatar from "gravatar";
import { ImageWrapper } from "./Styles";
import { useName } from "./queries";
import { editUser } from "@redux/modules/user";

function EditUserPage() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
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
    let result2 = {
      id: userId,
      email: email,
      ...data,
    };
    dispatch(editUser(result2));
    updateusername(result);
    setLoading(false);
  };

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0]);
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <PageLayout>
      <div style={{ textAlign: "center" }}>
        <h3>프로필 수정하기</h3>
      </div>
      <ImageWrapper>
        <img src={gravatar.url(`${email}`, { s: "220px", d: "retro" })}></img>
      </ImageWrapper>
      <div>
        <input type="file" accept="image/*" ref={inputRef} />
        <button onClick={onUploadImageButtonClick}>이미지 업로드</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
