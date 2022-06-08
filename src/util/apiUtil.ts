import axiosConfig from '../lib/axiosConfig';

const get = (url: string) => {
  return axiosConfig.get(url);
};

const post = (url: string, data: any) => {
  return axiosConfig.post(url, data);
};

const returnObj = {
  get,
  post,
};

export default returnObj;
