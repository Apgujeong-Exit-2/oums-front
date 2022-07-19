import { selector } from 'recoil';
import apiUtil from '../util/apiUtil';

export type menuType = {
  title: string;
  path: string;
};

export const menuDataList = selector<menuType[]>({
  key: 'menuData',
  get: ({ get }) => {
    const response = apiUtil.get<menuType[]>('/menu/list');
    console.log(response);
    return response;
  },
});
