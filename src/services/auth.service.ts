import instance from "@/lib/axios/instance";
import endpoint from "./endpoint.constant";
import { IActivation, ILogin, IRegister } from "@/types/Auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.Auth}/register`, payload),
  activation: (payload: IActivation) =>
    instance.post(`${endpoint.Auth}/activation`, payload),
  login: (payload: ILogin) => instance.post(`${endpoint.Auth}/login`, payload),
  getProfileWithToken: (token: string) =>
    instance.get(`${endpoint.Auth}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default authServices;
