import { useMutation, useQueryClient } from "@tanstack/react-query";
import customAxios from "@utils/fetch";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

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
