import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import { AxiosError } from "axios";
import QueryString from "query-string";

interface ReqData {
  projectId: number;
  sprintName: string;
  sprintDetails: string;
}

/**
 * 스프린트 init 하는 axios 함수
 */
const getSprints = (projectId: string) => {
  const queryString = QueryString.stringify({ projectId }, queryStringOptions);
  return customAxios({ method: "get", url: `/personalProject?${queryString}` })
    .then(({ data }) => data.data)
    .catch(console.error);
};

export const useGetSprints = (projectId: string) => {
  return useQuery(["sprints", { projectId }], () => getSprints(projectId), {
    enabled: !!projectId,
  });
};

const addSprints = (data: ReqData) => customAxios({ method: "post", url: "/personalProject/addSprint", data });

export const useAddSprintMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(addSprints, {
    onSuccess: () => {
      alert(`스프린트 생성 완료`);
      queryClient.setQueryData(["sprints", {}], ({ data }) => {
        console.log(data);
        console.log(data);
        console.log(data);
        console.log(data);
      });
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.error(response);
    },
  });
};