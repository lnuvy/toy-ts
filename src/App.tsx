import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "@pages/ProjectPage/ProjectPage";
import LoginPage from "@pages/LoginPage/LoginPage";
import RegisterPage from "@pages/RegisterPage/RegisterPage";
import CheckPage from "@pages/CheckPage/CheckPage";
import LandingPage from "@pages/LandingPage/LandingPage";
import SprintPage from "@pages/SprintPage/SprintPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/projectPage" element={<ProjectPage />} />
        <Route path="/checkPage" element={<CheckPage />} />
        <Route path="/sprint/:projectId" element={<SprintPage />} />
        {/* <Route path="/PersonalProject/:projectId" element={<PersonalProject />} /> */}
        {/* <Route path="/EditPage/:projectId" element={<EditPage />} /> */}
        {/* <Route path="/Sprint/:sprintId" element={<Sprint />} /> */}

        {/* 10.27 */}
        {/* 아래처럼 경로에 Page 없애는건 어때 ? */}
        {/* <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/check" element={<CheckPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
