import axiosConfig from '../lib/axiosConfig';

const get = (url: string) => {
  return axiosConfig.get(url);
};

const post = () => {
  console.log('post');
};

const returnObj = {
  get,
  post,
};

export default returnObj;
