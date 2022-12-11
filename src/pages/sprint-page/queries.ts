import { useMutation, useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import QueryString from "query-string";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface ReqData {
  projectId: string;
  sprintName: string;
  sprintDetails: string;
}

//sprint list 받기
const getSprintList = (projectId: string) => {
  const queryString = QueryString.stringify({ projectId: projectId }, queryStringOptions);
  return customAxios({ method: "get", url: `/personalProject?${queryString}` })
    .then(({ data }) => console.log(data))
    .catch(console.error);
};

export const useGetSprintList = (projectId: string) => {
  return useQuery(["SprintList", { projectId }], () => getSprintList(projectId), {
    enabled: !!projectId,
  });
};

//addSprint
const addSprint = (data: ReqData) => customAxios({ method: "post", url: `/personalProject/addSprint`, data });

export const useAddSprintMutation = () => {
  const navigate = useNavigate();

  return useMutation(addSprint, {
    onSuccess: () => {
      alert(`스프린트 생성 완료`);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.error(response);
    },
  });
};

//sprint init
const getSprintInit = (sprintId: string) => {
  const queryString = QueryString.stringify({ sprintId: sprintId }, queryStringOptions);
  return customAxios({ method: "get", url: `/Sprint?${queryString}` })
    .then(({ data }) => console.log(data))
    .catch(console.error);
};

export const useGetSprintInit = (sprintId: string) => {
  return useQuery(["SprintInit", { sprintId }], () => getSprintInit(sprintId), {
    enabled: !!sprintId,
  });
};
