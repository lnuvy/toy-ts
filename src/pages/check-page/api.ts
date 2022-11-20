import axios from "axios";

export const getPassword = async (data: any) => {
  const result = await axios.post("/find-password", data);
  alert(result);
  console.log(result);
  return result;
};
