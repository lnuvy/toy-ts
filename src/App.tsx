import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "@pages/project-page/ProjectPage";
import LoginPage from "@pages/login-page/LoginPage";
import RegisterPage from "@pages/register-page/RegisterPage";
import CheckPage from "@pages/check-page/CheckPage";
import LandingPage from "@pages/landing-page/LandingPage";
import SprintPage from "@pages/sprint-page/SprintPage";
import ProjectDetail from "@pages/project-detail/ProjectDetail";
import { useEffect } from "react";
import { getStorage } from "@utils/storage";
import { useState } from "react";
import AuthLayout from "@pages/AuthLayout";
import EditUserPage from "@pages/edituser-page/EditUserPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const session = getStorage();
    if (session) setIsLogin(true);
    else setIsLogin(false);
  }, []);

  if (isLogin)
    return (
      <AuthLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/sprint/:projectId" element={<SprintPage />} />
          <Route path="/edituser" element={<EditUserPage />} />
          {/* <Route path="/EditPage/:projectId" element={<EditPage />} /> */}
          {/* <Route path="/Sprint/:sprintId" element={<Sprint />} /> */}
        </Routes>
      </AuthLayout>
    );
  else
    return (
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/check" element={<CheckPage />} />

        {/* 10.27 */}
        {/* 아래처럼 경로에 Page 없애는건 어때 ? */}
        {/* <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/check" element={<CheckPage />} /> */}
      </Routes>
    );
};

export default App;
