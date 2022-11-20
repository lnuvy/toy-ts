import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/modules/user";
import axios from "axios";
import PageLayout from "@pages/PageLayout";
import { setStorage, getStorage } from "@utils/storage";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = getStorage();

    if (isLogin) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (data: any) => {
    console.log(data);
    setLoading(true);
    axios.post("/login", data).then((res) => {
      // sessionStorage에 userId란 키값으로 저장
      if (res.data.data != null) {
        setStorage(res.data.data.id);
        dispatch(loginUser(res.data.data));
      }
      if (res.data.message === "로그인 성공") {
        //navigate는 새로고침을 하지 않음
        window.location.href = "/";
      } else if (res.data.message === "로그인 실패") {
        alert("입력을 다시 해주세요.");
      }
      dispatch(loginUser(true));
    });
    setLoading(false);
  };

  return (
    <PageLayout>
      <div>
        <h1>ToyProject</h1>
        <h2>Testaaaaaaaaaaa</h2>
        <h2>Testaaaaaaaaaaa</h2>
        <h2>Testaaaaaaaaaaa</h2>
        <h2>Testaaaaaaaaaaa</h2>
      </div>
      <div className="Box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>로그인</h3>
          </div>
          <label>Email</label>
          <div className="userId">
            <img src="/svg/user.svg" alt="user" />
            <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p>빈칸을 채워주세요</p>}
          </div>

          <label>Password</label>
          <div className="password">
            <img src="/svg/password.svg" alt="password" />
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
          </div>

          {errorFromSubmit && <p>{errorFromSubmit}</p>}
          <input type="submit" disabled={loading} value="로그인" />
          <Link style={{ color: "gray", textDecoration: "none" }} to="/registerPage">
            회원가입하기
          </Link>
          <Link style={{ color: "gray", textDecoration: "none", float: "right" }} to="/checkPage">
            비밀번호 찾기
          </Link>
        </form>
      </div>
    </PageLayout>
  );
}

export default LoginPage;
