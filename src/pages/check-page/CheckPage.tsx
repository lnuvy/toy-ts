import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageLayout from "@pages/PageLayout";
import { getPassword } from "./api";
import { usePassword } from "./queries";
function CheckPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutate: getuserpassword } = usePassword();
  const onSubmit = async (data: any) => {
    setLoading(true);
    getuserpassword(data);
    //getPassword(data);
    setLoading(false);
  };

  return (
    <PageLayout>
      <div>
        <h1>CooFlow</h1>
        <h2>프로젝트 생성 및 스프린트를 생성하여</h2>
        <h2>개발, 유지보수에 용이한 웹 사이트입니다.</h2>
        <h4>문의사항 (moon@naver.com)</h4>
      </div>
      <div className="Box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ textAlign: "center" }}>
            <h3>비밀번호 찾기</h3>
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
          <input type="submit" value="비밀번호 찾기" />
          <Link style={{ color: "gray", textDecoration: "none" }} to="/">
            로그인하기
          </Link>
        </form>
      </div>
    </PageLayout>
  );
}

export default CheckPage;
