import { useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import QueryString from "query-string";

//프로젝트 정보 하나 가져오기
const getOneProject = (projectId: string) => {
  const queryString = QueryString.stringify({ projectId: projectId }, queryStringOptions);
  return customAxios({ method: "get", url: `/personalProject/getOne?${queryString}` })
    .then(({ data }) => data.data)
    .catch(console.error);
};

export const useGetOneProject = (projectId: string) => {
  return useQuery(["GetOne", { projectId }], () => getOneProject(projectId), {
    enabled: !!projectId,
  });
};
