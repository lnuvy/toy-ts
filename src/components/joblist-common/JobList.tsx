import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import NoContent from "./NoContent";
import { JobListType } from "@typing/DB";
import { useGetJobList } from "@pages/joblist-page/queries";

interface Props {
  jobList?: JobListType[];
}
const JobList: React.FC<Props> = () => {
  const { sprintId } = useParams();
  const { data: jobList } = useGetJobList(sprintId);
  if (!jobList) return <NoContent />;
  return (
    <>
      <div>
        {jobList.map((job: JobListType) => {
          return (
            <div key={jobList.jobId}>
              <div>{job.detail}</div>
            </div>
          );
        })}
      </div>
    </>
  );
  return <div></div>;
};

export default JobList;
