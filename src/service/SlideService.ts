import { selector, selectorFamily } from 'recoil';
import apiUtil from '../util/apiUtil';
import { ERole, ISlideResponse } from '../dto/SlideDto';
import { getAddPartyState } from '../store/AddPartyStore';

/**
 * 파티 만들기 슬라이드 조회
 */
export const getAddPartySlideListService = selector<ISlideResponse[]>({
  key: 'slide/addPartySlide',
  get: async ({ get }) => {
    return await apiUtil.get<ISlideResponse[]>('/slide/list?type=addParty');
  },
});

export const getCurrentAddPartySlideDataService = selector<ISlideResponse[]>({
  key: 'slide/currentPartySlide',
  get: ({ get }) => {
    const slideData = get(getAddPartySlideListService);
    const { selectRole } = get(getAddPartyState);
    return slideData.filter((data) => data.roleType === selectRole);
  },
});
