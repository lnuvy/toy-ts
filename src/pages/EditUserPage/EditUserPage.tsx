import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import PageLayout from "@pages/PageLayout";
import { getStorageName, getStorage, getStorageEmail } from "@utils/storage";

function EditUserPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const userId = getStorage();
  const userName = getStorageName();
  const userEmail = getStorageEmail();

  const onSubmit = async (data: any) => {
    setLoading(true);
    axios
      .post("/find-password", data)
      .then((res) => {
        console.log(res);
        alert(res); //값이 온 경우 가져온 정보를 보여줘야된다.(ex. 비밀번호)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "center" }}>
          <h3>프로필 수정하기</h3>
        </div>
        <label>Email</label>
        <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>빈칸을 채워주세요</p>}

        <label>Name</label>
        <input {...register("name", { required: true, maxLength: 10 })} />
        {errors.name && errors.name.type === "required" && <p>빈칸을 채워주세요</p>}
        {errors.name && errors.name.type === "maxLength" && <p>최대 10글자</p>}

        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && <p>빈칸을 채워주세요</p>}
        {errors.password && errors.password.type === "pattern" && (
          <p>최소 8자에서 최대 16자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 사용</p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" />
      </form>
    </PageLayout>
  );
}

export default EditUserPage;
