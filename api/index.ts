import axios, { AxiosRequestConfig } from "axios";
import { SERVER, TIMEOUT } from "../constants";

export const api = axios.create({
  baseURL: SERVER,
  timeout: TIMEOUT * 1000,
  validateStatus: null,
});

export const get = <T>(
  url: string,
  obj?: AxiosRequestConfig<any> | undefined
) => {
  return api.get<T>(url, obj);
};
