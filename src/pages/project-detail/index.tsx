import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetOneProject } from "./queries";
import { ProjectDetailBox, ProjectContainer } from "./Styles";
import ElFont from "@components/el-font";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  // console.log(projectId);
  const { data: projectdetail } = useGetOneProject(projectId as string);
  const length = projectdetail?.length;
  useEffect(() => {
    if (projectId) {
      console.log(projectdetail);
    }
  }, [projectId]);

  return (
    <ProjectDetailBox>
      <div>
        <h1>Project Detail</h1>
      </div>
      <ProjectContainer>
        {projectdetail ? (
          <div>
            <div>ProjectName</div>
            <p> {projectdetail.projectName}</p>
            <div>ProjectDetail</div>
            <p>{projectdetail.projectDetail}</p>
            <div>ProjectLeader</div>
            <p>{projectdetail.projectLeader}</p>
            <div>memberList</div>
            {/* <p>{projectdetail.memberList}</p> */}
            <div>sprintSize</div>
            <p>{projectdetail.sprintSize}</p>
          </div>
        ) : (
          <div>
            <p>no Content</p>
          </div>
        )}

        <button
          onClick={() => {
            navigate(`/sprint/${projectId}`);
          }}
        >
          <ElFont size={16} color="white">
            + 프로젝트 추가하기
          </ElFont>
        </button>
      </ProjectContainer>
    </ProjectDetailBox>
  );
};

export default ProjectDetail;
