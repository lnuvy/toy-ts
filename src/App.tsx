import { Route, Routes } from "react-router-dom";
import ProjectPage from "@pages/project-page";
import LoginPage from "@pages/login-page/LoginPage";
import RegisterPage from "@pages/register-page/RegisterPage";
import CheckPage from "@pages/check-page/CheckPage";
import LandingPage from "@pages/landing-page/LandingPage";
import SprintPage from "@pages/sprint-page/AddPage";
import ProjectDetail from "@pages/project-detail";
import { useEffect } from "react";
import { getStorage } from "@utils/storage";
import { useState } from "react";
import AuthLayout from "@pages/AuthLayout";
import EditUserPage from "@pages/edituser-page/EditUserPage";
import EditProjectPage from "@pages/editproject-page/EditProjectPage";
import SprintList from "@components/sprint-common/SprintList";
import JoblistPage from "@pages/joblist-page/JoblistPage";
import JobList from "@components/joblist-common/JobList";
import Job from "@pages/joblist-page/AddPage";
import EditJobPage from "@pages/editjob-page/EditJobPage";

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
          <Route path="/sprintlist/:projectId" element={<SprintList />} />
          <Route path="/edituser" element={<EditUserPage />} />
          <Route path="/editproject/:projectId" element={<EditProjectPage />} />
          <Route path="/project/sprint/job/:sprintId" element={<Job />} />
          <Route path="/project/sprint/jobList/:sprintId" element={<JobList />} />
          <Route path="/project/sprint/job/detail/:jobId" element={<EditJobPage />} />
        </Routes>
      </AuthLayout>
    );

  return (
    <Routes>
      <Route path="/*" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/check" element={<CheckPage />} />
    </Routes>
  );
};

export default App;

// const App = () => {
//   return (
//     <AuthLayout>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/project" element={<ProjectPage />} />
//         <Route path="/project/:projectId" element={<ProjectDetail />} />
//         <Route path="/sprint/:projectId" element={<SprintPage />} />
//         <Route path="/edituser" element={<EditUserPage />} />
//       </Routes>
//     </AuthLayout>
//   );
// };

// export default App;
