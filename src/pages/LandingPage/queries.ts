import { useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import QueryString from "query-string";

// export const getInit = async (userId: string) => {
//   // const { data } = await axios.get(`/personalPage/${userId}`);
//   // return data;
//   const result = await axios.get(`/personalPage?id=${userId}`);
//   console.log(result);

//   return result.data.data;
// };

/**
 * 프로젝트 init 하는 axios 함수
 */
const getProjects = (userId: string) => {
  const queryString = QueryString.stringify({ id: userId }, queryStringOptions);
  return customAxios({ method: "get", url: `/personalPage?${queryString}` })
    .then(({ data }) => data.data)
    .catch(console.log);
};

/**
 * server State 관리해주는 react-query (지금 엄청 핫한 라이브러리라 찾아보면 좋음~
 * 참고) https://tanstack.com/query/v4/docs/overview
 */
export const useGetProjects = (userId: string) => {
  return useQuery(["projects", { userId }], () => getProjects(userId), {
    enabled: !!userId,
  });
};
