import axios, { AxiosInstance, AxiosResponse } from "axios";
import QueryString from "query-string";

const customAxios: AxiosInstance = axios.create({
  baseURL: "http://ec2-3-36-116-124.ap-northeast-2.compute.amazonaws.com",
  headers: {
    Accept: "application/json, text/plain, */*",
  },
  withCredentials: true,
});

customAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },

  // error Handling
  async (error) => {
    const originalConfig = error.config;

    if (error.response) {
      console.log("error!!!");
      console.error(error);
    }
    return Promise.reject(error);
  },
);

export default customAxios;

/**
 * query-string 사용할때 디폴트로 사용할 옵션 정리
 *
 * 참고) https://github.com/sindresorhus/query-string#readme
 */
export const queryStringOptions: QueryString.StringifyOptions | undefined = {
  skipEmptyString: true,
  skipNull: true,
  arrayFormat: "separator",
  arrayFormatSeparator: "|",
};
