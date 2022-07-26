import { selector } from 'recoil';
import apiUtil from '../util/apiUtil';
import { IMenuResponse } from '../dto/MenuDto';

/**
 * 메뉴 데이터 조회
 */
export const getMenuListService = selector<IMenuResponse[]>({
  key: 'menu/getMenuListData',
  get: async ({ get }) => {
    return await apiUtil.get<IMenuResponse[]>('/menu/list');
  },
});
