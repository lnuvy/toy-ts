import axios from "axios";

export const getUser = async (userId: string) => {
  // const { data } = await axios.get(`/personalPage/${userId}`);
  // return data;
  const result = await axios.post(`/member?id=${userId}`);
  return result.data.data;
};
