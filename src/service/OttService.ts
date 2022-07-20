import { selector } from 'recoil';
import { IOttResponse } from '../dto/OttDto';
import apiUtil from '../util/apiUtil';

/**
 * Ott 리스트 조회
 */
export const getOttListData = selector<IOttResponse[]>({
  key: 'ott/getOttListData',
  get: async ({ get }) => {
    return await apiUtil.get<IOttResponse[]>('/ott/list');
  },
});
