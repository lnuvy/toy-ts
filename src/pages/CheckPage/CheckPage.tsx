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
          <h3>회원정보 찾기</h3>
        </div>
        <label>Email</label>
        <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>빈칸을 채워주세요</p>}

        <label>findPasswordAnswer</label>
        <select>
          <option>가장 좋아하는 과일</option>
          <option>좋아하는 색</option>
        </select>
        <input {...register("findPasswordAnswer", { required: true })} />
        {errors.findPasswordAnswer && <p>빈칸을 채워주세요</p>}

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
