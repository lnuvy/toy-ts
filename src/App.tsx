import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "@pages/ProjectPage/ProjectPage";
import LoginPage from "@pages/LoginPage/LoginPage";
import RegisterPage from "@pages/RegisterPage/RegisterPage";
import CheckPage from "@pages/CheckPage/CheckPage";
import LandingPage from "@pages/LandingPage/LandingPage";
import SprintPage from "@pages/SprintPage/SprintPage";
import ProjectDetail from "@pages/ProjectDetail/ProjectDetail";
import { useEffect } from "react";
import { getStorage } from "@utils/storage";
import { useState } from "react";
import AuthLayout from "@pages/AuthLayout";
import EditUserPage from "@pages/EditUserPage/EditUserPage";

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
          <Route path="/projectPage" element={<ProjectPage />} />
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
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/checkPage" element={<CheckPage />} />

        {/* 10.27 */}
        {/* 아래처럼 경로에 Page 없애는건 어때 ? */}
        {/* <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/check" element={<CheckPage />} /> */}
      </Routes>
    );
};

export default App;
