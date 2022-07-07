import axiosConfig from '../lib/axiosConfig';
import { AxiosResponse } from 'axios';

const get = <T>(url: string): Promise<T> => {
  return axiosConfig.get<T, AxiosResponse<T>, any>(url).then(({ data }) => data);
};

const post = <T>(url: string, data: any): Promise<T> => {
  return axiosConfig.post<T, AxiosResponse<T>, any>(url, data).then(({ data }) => data);
};

const returnObj = {
  get,
  post,
};

export default returnObj;
