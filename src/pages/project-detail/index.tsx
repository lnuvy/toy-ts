import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetOneProject } from "./queries";
import { MemberType, ProjectType } from "@typing/DB";
import { ProjectDetailBox, ProjectContainer } from "./Styles";
import ElFont from "@components/el-font";
import SprintList from "@components/sprint-common/SprintList";

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
  const onClickSprint = () => {
    navigate(`/sprintlist/${projectId}`);
  };

  return (
    <ProjectDetailBox>
      <div>
        <h1>Project Detail</h1>
      </div>
      <ProjectContainer>
        {projectdetail ? (
          <div>
            <div>ProjectName</div>
            <p> {projectdetail.data.projectName}</p>
            <div>ProjectDetail</div>
            <p>{projectdetail.data.projectDetail}</p>
            <div>ProjectLeader</div>
            <p>
              {
                projectdetail.data.memberList.find((v: MemberType) => projectdetail.data.projectLeader === v.userId)
                  .name
              }
            </p>
            <div>memberList</div>
            {projectdetail.data.memberList.length <= 1 ? (
              <p>{projectdetail.data.memberList[0].name}</p>
            ) : (
              projectdetail.data.memberList.map((memberList: any) => {
                <div key={memberList.userId}>
                  <p>{memberList}</p>
                </div>;
              })
            )}

            {projectdetail.data.memberList.map((memberList: any) => {
              <div key={memberList.userId}>
                <p>{memberList}</p>
              </div>;
            })}
            <div>sprintSize</div>
            <p>{projectdetail.data.sprintSize}</p>
            <button onClick={onClickSprint}>
              <ElFont size={16} color="black">
                전체 스프린트 확인
              </ElFont>
            </button>
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
          <ElFont size={16} color="black">
            + 스프린트 추가하기
          </ElFont>
        </button>
      </ProjectContainer>
    </ProjectDetailBox>
  );
};

export default ProjectDetail;
