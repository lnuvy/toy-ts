import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "@pages/LandingPage/LandingPage";
import ProjectPage from "@pages/ProjectPage/ProjectPage";
import LoginPage from "@pages/LoginPage/LoginPage";
import RegisterPage from "@pages/RegisterPage/RegisterPage";
import CheckPage from "@pages/CheckPage/CheckPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />

        <Route path="/projectPage" element={<ProjectPage />} />
        {/* <Route path="/SprintPage/:projectId" element={<SprintPage />} /> */}
        <Route path="/checkPage" element={<CheckPage />} />
        {/* <Route path="/PersonalProject/:projectId" element={<PersonalProject />} /> */}
        {/* <Route path="/EditPage/:projectId" element={<EditPage />} /> */}
        {/* <Route path="/Sprint/:sprintId" element={<Sprint />} /> */}
      </Routes>
    </>
  );
};

export default App;
