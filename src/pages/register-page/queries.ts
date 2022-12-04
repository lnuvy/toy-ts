import { useMutation, useQueryClient } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface ReqData {
  email: string;
  name: string;
  password: string;
  findPasswordAnswer: string;
}

//Register
const register = (data: ReqData) => customAxios({ method: "post", url: "/join", data });

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation(register, {
    onSuccess: (response) => {
      if (response.data.message === "회원가입 성공") {
        alert(response.data.message);
        navigate("/");
      }
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.error(response);
    },
  });
};
