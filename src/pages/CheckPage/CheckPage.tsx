import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import PageLayout from "@pages/PageLayout";

function CheckPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: any) => {
    setLoading(true);
    axios
      .post("/find-password", data)
      .then((res) => {
        console.log(res);
        //값이 온 경우 가져온 정보를 보여줘야된다.(ex. 비밀번호)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <PageLayout>
      <div style={{ textAlign: "center" }}>
        <h3>회원정보 찾기</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>This email field is required</p>}

        <label>findPasswordAnswer</label>
        <select>
          <option>가장 좋아하는 과일</option>
          <option>좋아하는 색</option>
        </select>
        <input {...register("findPasswordAnswer", { required: true })} />
        {errors.findPasswordAnswer && <p>This field is required</p>}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" />
        <Link style={{ color: "gray", textDecoration: "none" }} to="/">
          로그인하기
        </Link>
      </form>
    </PageLayout>
  );
}

export default CheckPage;