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
const getSprintInit = (projectId: string) => {
  const queryString = QueryString.stringify({ projectId: projectId }, queryStringOptions);
  return customAxios({ method: "get", url: `/personalProject?${queryString}` })
    .then(({ data }) => console.log(data))
    .catch(console.error);
};

export const useGetSprintInit = (projectId: string) => {
  return useQuery(["SprintInit", { projectId }], () => getSprintInit(projectId), {
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
