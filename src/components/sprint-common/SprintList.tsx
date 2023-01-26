import React, { useState, useMemo } from "react";
import styled from "@emotion/styled";
import { useParams, useNavigate } from "react-router-dom";
import { SprintType } from "@typing/DB";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import NoContent from "./NoContent";
import { useGetSprintList } from "@pages/sprint-page/queries";
import ElFont from "@components/el-font";
import { usePagination, useTable } from "react-table";

interface Props {
  sprintList?: SprintType[];
}
const SprintList: React.FC<Props> = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { data: sprintList } = useGetSprintList(projectId);
  let array: any[] = [];
  let array2: any[] = [];
  if (!sprintList) return <NoContent />;
  else {
    console.log(sprintList);

    sprintList.map((sprint: SprintType) => {
      if (sprint.type && sprint.type === 1) {
        array.push(sprint);
        console.log(array);
      } else if (sprint.type && sprint.type === 2) {
        array2.push(sprint);
        console.log(array2);
      }
    });
  }

  return (
    <>
      <SprintContainer>
        <h2>Joblist</h2>
        <table>
          <thead>
            <tr>
              <th>SprintId</th>
              <th>Time</th>
              <th>SprintName</th>
              <th>SprintDetail</th>
              <th>추가하기</th>
              <th>확인하기</th>
            </tr>
          </thead>
          {array &&
            array.map((sprint: SprintType) => {
              return (
                <tbody key={sprint.sprintId}>
                  <tr key={sprint.sprintId}>
                    <td>{sprint.sprintId}</td>
                    <td>{sprint.localDateTime}</td>
                    <td>{sprint.sprintName}</td>
                    <td>{sprint.sprintDetail}</td>
                    <td
                      onClick={() => {
                        navigate(`/project/sprint/job/${sprint.sprintId}`);
                      }}
                    >
                      <ElFont size={16} color="black">
                        + Job 추가하기
                      </ElFont>
                    </td>
                    <td
                      onClick={() => {
                        navigate(`/project/sprint/jobList/${sprint.sprintId}`);
                      }}
                    >
                      <ElFont size={16} color="black">
                        + JobList 확인
                      </ElFont>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
        <h2>Code</h2>
        <table>
          <thead>
            <tr>
              <th>SprintId</th>
              <th>Time</th>
              <th>SprintName</th>
              <th>SprintDetail</th>
              <th>추가하기</th>
              <th>확인하기</th>
            </tr>
          </thead>
          {array2 &&
            array2.map((sprint: SprintType) => {
              return (
                <tbody key={sprint.sprintId}>
                  <tr key={sprint.sprintId}>
                    <td>{sprint.sprintId}</td>
                    <td>{sprint.localDateTime}</td>
                    <td>{sprint.sprintName}</td>
                    <td>{sprint.sprintDetail}</td>
                    <td
                      onClick={() => {
                        navigate(`/project/sprint/job/${sprint.sprintId}`);
                      }}
                    >
                      <ElFont size={16} color="black">
                        + Code 추가하기
                      </ElFont>
                    </td>
                    <td
                      onClick={() => {
                        navigate(`/project/sprint/jobList/${sprint.sprintId}`);
                      }}
                    >
                      <ElFont size={16} color="black">
                        + Code 확인
                      </ElFont>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
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
