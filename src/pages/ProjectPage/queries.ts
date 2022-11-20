import { useMutation, useQueryClient } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import QueryString from "query-string";

interface ReqData {
  userId: number;
  projectName: string;
  projectDetails: string;
}

/**
 * 프로젝트 Add
 */
const addProject = (data: ReqData) => customAxios({ method: "post", url: `/personalPage`, data });

export const useAddProjectMutation = () => {
  const navigate = useNavigate();

  return useMutation(addProject, {
    onSuccess: () => {
      alert(`프로젝트 생성 완료`);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.error(response);
    },
  });
};

/**
 * 프로젝트 삭제
 */
const deleteProject = (data: { projectId: number }) => {
  return customAxios({ method: "delete", url: `/personalProject/${data?.projectId}` });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries(["projects", {}]);
    },
  });
};
