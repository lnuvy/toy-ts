import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage";
import LoginPage from "./page/LoginPage/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* <Route path="/RegisterPage" element={<RegisterPage />} /> */}
      <Route path="/LandingPage" element={<LandingPage />} />
      {/* <Route path="/" element={<LandingPage />} /> */}

      {/* <Route path="/ProjectPage" element={<ProjectPage />} /> */}
      {/* <Route path="/SprintPage/:projectId" element={<SprintPage />} /> */}
      {/* <Route path="/CheckPage" element={<CheckPage />} /> */}
      {/* <Route path="/PersonalProject/:projectId" element={<PersonalProject />} /> */}
      {/* <Route path="/EditPage/:projectId" element={<EditPage />} /> */}
      {/* <Route path="/Sprint/:sprintId" element={<Sprint />} /> */}
    </Routes>
  );
};

export default App;
