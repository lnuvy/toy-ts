import { RegisterUser, LoginUser, LogoutUser } from "../types";
import axios from "axios";

//register, post메소드
export function registerUser(data) {
  const request = axios.post("/join", {
    email: data.email,
    name: data.name,
    password: data.password,
    findPasswordAnswer: data.findPasswordAnswer,
  });
  return {
    type: RegisterUser,
    payload: request,
  };
}
//login, post메소드
export function loginUser(data) {
  const request = axios.post("/login", {
    email: data.email,
    password: data.password,
  });
  return {
    type: LoginUser,
    payload: request,
  };
}
export function logoutUser() {
  return {
    type: LogoutUser,
  };
}
