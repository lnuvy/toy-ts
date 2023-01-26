import { useMutation, useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import QueryString from "query-string";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface ReqData {
  sprintId: string;
  toDo: string;
  detail: string;
  start: string;
  end: string;
  workerList: any;
}
interface ReqData2 {
  jobId: string;
  toDo: string;
  jobDetail: string;
}
//joblist
const getJobList = (sprintId: string) => {
  const queryString = QueryString.stringify({ sprintId: sprintId }, queryStringOptions);
  return customAxios({ method: "get", url: `/project/sprint/jobList?${queryString}` })
    .then(({ data }) => data.data)
    .catch(console.error);
};

export const useGetJobList = (sprintId: any) => {
  return useQuery(["JobList", { sprintId }], () => getJobList(sprintId), {
    enabled: !!sprintId,
  });
};

//savejob
const savejob = (data: ReqData) => customAxios({ method: "post", url: `/project/sprint/job`, data });

export const useSaveJob = (sprintId: string) => {
  const navigate = useNavigate();

  return useMutation(savejob, {
    onSuccess: () => {
      alert(`저장`);
      navigate(`/project/sprint/jobList/${sprintId}`);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      if (response && response.status == 302) {
        //window.location.href = "/";
      }
      console.error(response);
    },
  });
};

//delete
const deletejob = (data: { jobId: number }) => customAxios({ method: "delete", url: `/project/sprint/job`, data });

export const useDeleteJob = (sprintId: string) => {
  const navigate = useNavigate();

  return useMutation(deletejob, {
    onSuccess: () => {
      alert(`삭제 완료`);
      navigate(`/project/sprint/jobList/${sprintId}`);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      if (response && response.status == 302) {
        //window.location.href = "/";
      }
      console.error(response);
    },
  });
};

//update
const update = (data: ReqData2) => customAxios({ method: "put", url: `/project/sprint/job/detail`, data });

export const useUpdateJob = () => {
  const navigate = useNavigate();

  return useMutation(update, {
    onSuccess: () => {
      alert(`수정 완료`);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      if (response && response.status == 302) {
        //window.location.href = "/";
      }
      console.error(response);
    },
  });
};
