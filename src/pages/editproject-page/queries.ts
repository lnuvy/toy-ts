import { useMutation, useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import { AxiosError } from "axios";
import QueryString from "query-string";
import { useNavigate } from "react-router-dom";

interface ReqData {
  projectId: string;
  projectName: string;
  projectDetails: string;
}

const updateProject = (data: ReqData) => customAxios({ method: "put", url: "/personalProject/update", data });

export const useProject = () => {
  //const navigate = useNavigate();

  return useMutation(updateProject, {
    onSuccess: (response) => {
      //navigate("/");
      console.log(response);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.error(response);
    },
  });
};
