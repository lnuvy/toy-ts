import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import PageLayout from "@pages/PageLayout";
import { getStorage } from "@utils/storage";
import { useRegister } from "./queries";

function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: registerMutate } = useRegister();

  useEffect(() => {
    const isLogin = getStorage();

    if (isLogin) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (data: any) => {
    console.log(data.email);
    setLoading(true);
    registerMutate(data);
    {
      /*
      axios.post("/join", data).then((res) => {
      console.log(res);
      if (res.data.message === "회원가입 성공") {
        navigate("/login");
      }
    });
      */
    }

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
            <h3>회원가입</h3>
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

          <label>findPasswordAnswer</label>
          <select>
            <option>가장 좋아하는 과일</option>
            <option>좋아하는 색</option>
          </select>
          <input {...register("findPasswordAnswer", { required: true })} />
          {errors.findPasswordAnswer && <p>빈칸을 채워주세요</p>}

          {errorFromSubmit && <p>{errorFromSubmit}</p>}

          <input type="submit" value="회원가입하기" />
          <Link style={{ color: "gray", textDecoration: "none" }} to="/login">
            로그인하기
          </Link>
        </form>
      </div>
    </PageLayout>
  );
}

export default RegisterPage;
