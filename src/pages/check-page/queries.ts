import { useMutation, useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import { AxiosError } from "axios";
import QueryString from "query-string";
import { useNavigate } from "react-router-dom";

{
  /*
    export const getPassword = async (data: any) => {
    const result = await axios.post("/find-password", data);
    alert(result);
    console.log(result);
    return result;
  };
    */
}

interface ReqData {
  email: string;
  findPasswordAnswer: string;
}

//비밀번호 찾기
const getPassword = (data: ReqData) => customAxios({ method: "post", url: "/find-password", data });

export const usePassword = () => {
  const navigate = useNavigate();

  return useMutation(getPassword, {
    onSuccess: (response) => {
      if (response.data.data === "비밀번호 찾기 실패") {
        alert(response.data.data);
      } else {
        alert(response.data.data);
        navigate("/");
      }
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.error(response);
    },
  });
};
