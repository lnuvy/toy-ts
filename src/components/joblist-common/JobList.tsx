import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import NoContent from "./NoContent";
import { JobListType, JobWorkers } from "@typing/DB";
import { useGetJobList } from "@pages/joblist-page/queries";
import { useDeleteJob } from "@pages/joblist-page/queries";
import { useNavigate } from "react-router-dom";

interface Props {
  jobList?: JobListType[];
}
const JobList: React.FC<Props> = () => {
  const { sprintId } = useParams();
  const { data: jobList } = useGetJobList(sprintId);
  const { mutate: deleteJob } = useDeleteJob(sprintId as string);
  const navigate = useNavigate();
  const onClickSetting = useCallback((job: number) => {
    const confirm = window.confirm("이 프로젝트를 삭제할까요?");

    if (confirm) {
      console.log(job);
      const jobId = job;
      deleteJob({ jobId });
    }
  }, []);
  const onClickEditJob = (jobId: number) => {
    navigate(`/project/sprint/job/detail/${jobId}`);
  };
  if (!jobList) return <NoContent />;
  else console.log(jobList);
  return (
    <>
      <div>
        {jobList.list.map((job: JobListType) => {
          return (
            <div key={job.jobId}>
              <div>
                <p>{job.start}</p>
                <p>{job.end}</p>
                <p>{job.detail}</p>
                <p>{job.toDo}</p>
                <p>{job.jobWorkers[0].name}</p>
                <p>
                  {job.jobWorkers.map((worker: JobWorkers) => {
                    <p>{worker.name}</p>;
                  })}
                </p>
                <button onClick={() => onClickSetting(job.jobId)}>삭제하기</button>
                <button onClick={() => onClickEditJob(job.jobId)}>수정하기</button>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JobList;
