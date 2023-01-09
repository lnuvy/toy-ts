import { useMutation, useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import { AxiosError } from "axios";
import QueryString from "query-string";
import { useNavigate } from "react-router-dom";

interface ReqData {
  id: string;
  name: string;
}
const updateName = (data: ReqData) => customAxios({ method: "post", url: "/member-modification", data });

export const useName = () => {
  const navigate = useNavigate();

  return useMutation(updateName, {
    onSuccess: (response) => {
      //navigate("/");
      window.location.href = "/";
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
