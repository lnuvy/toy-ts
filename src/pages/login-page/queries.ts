import { loginUser } from "@redux/modules/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import customAxios, { queryStringOptions } from "@utils/fetch";
import { setStorage } from "@utils/storage";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
interface ReqData {
  email: string;
  password: string;
}

//Login
const login = (data: ReqData) => customAxios({ method: "post", url: "/login", data });

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation(login, {
    onSuccess: (response) => {
      if (response.data.data != null) {
        setStorage(response.data.data.id);
        dispatch(loginUser(response.data.data));
      }
      if (response.data.message === "로그인 성공") {
        window.location.href = "/";
      } else if (response.data.message === "로그인 실패") {
        alert("입력을 다시 해주세요");
      }
      dispatch(loginUser(true));
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.error(response);
    },
  });
};
