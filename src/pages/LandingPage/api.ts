import axios from "axios";

export const getInit = async (userId: string) => {
  // const { data } = await axios.get(`/personalPage/${userId}`);
  // return data;
  const result = await axios.get(`/personalPage?id=${userId}`);
  return result.data.data;
};