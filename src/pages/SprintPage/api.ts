import axios from "axios";

export const getSprintInit = (projectId: string) => {
  return axios.get(`/personalProject/${projectId}`).then(({ data }) => data);
};
