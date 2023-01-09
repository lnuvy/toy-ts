import React from "react";
import styled from "@emotion/styled";
import { useParams, useNavigate } from "react-router-dom";
import { SprintType } from "@typing/DB";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import NoContent from "./NoContent";
import { useGetSprintList } from "@pages/sprint-page/queries";
import ElFont from "@components/el-font";
import { usePagination, useTable } from "react-table";
import Sprinttable from "./sprintTable";

interface Props {
  sprintList?: SprintType[];
}
const SprintList: React.FC<Props> = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { data: sprintList } = useGetSprintList(projectId);
  if (!sprintList) return <NoContent />;
  else console.log(sprintList);
  return (
    <>
      <Sprinttable />
      <SprintContainer>
        {sprintList.map((sprint: SprintType) => {
          return (
            <div key={sprint.sprintId}>
              {sprint.type === 1 ? (
                <div>
                  <h1>Joblist</h1>
                  <h3>sprintId</h3>
                  <p>{sprint.sprintId}</p>
                  <h3>Time</h3>
                  <p>{sprint.localDateTime}</p>
                  <h3>SprintName</h3>
                  <p>{sprint.sprintName}</p>
                  <h3>SprintDetail</h3>
                  <p>{sprint.sprintDetail}</p>
                </div>
              ) : (
                <div>
                  <h1>Code</h1>
                  <h3>sprintId</h3>
                  <p>{sprint.sprintId}</p>
                  <h3>Time</h3>
                  <p>{sprint.localDateTime}</p>
                  <h3>SprintName</h3>
                  <p>{sprint.sprintName}</p>
                  <h3>SprintDetail</h3>
                  <p>{sprint.sprintDetail}</p>
                </div>
              )}
              <button
                onClick={() => {
                  navigate(`/project/sprint/job/${sprint.sprintId}`);
                }}
              >
                <ElFont size={16} color="black">
                  + Job 추가하기
                </ElFont>
              </button>
              <button
                onClick={() => {
                  navigate(`/project/sprint/jobList/${sprint.sprintId}`);
                }}
              >
                <ElFont size={16} color="black">
                  + JobList 확인
                </ElFont>
              </button>
              <br /> ----------------------------------
            </div>
          );
        })}
      </SprintContainer>
    </>
  );
};
const SprintContainer = styled.div`
  margin-top: 50px;
  flex-wrap: wrap;
  padding: 30px;
  align-items: center;
  justify-content: start;
  column-gap: 20px;
  font-family: "LINESeedKR-Bd";
  background-color: ${({ theme }) => theme.palette.gray5};
`;

export default SprintList;
