import { atom, selector } from 'recoil';
import { ERole } from '../dto/SlideDto';
import { getOttListData } from '../service/OttService';

interface IState {
  selectOtt: string;
  selectRole: ERole;
  isOttSelect: boolean;
}

/**
 * 파티 만들기 상태값
 */
export const getAddPartyState = atom<IState>({
  key: 'party/getState',
  default: {
    isOttSelect: false,
    selectOtt: '',
    selectRole: ERole.master,
  },
});

/**
 * 선택된 파티 데이터 조회
 */
export const getCurrentPartyData = selector({
  key: 'party/getCurrentPartyData',
  get: ({ get }) => {
    const { selectOtt } = get(getAddPartyState);
    const ottList = get(getOttListData);
    return ottList.filter((data) => data.title === selectOtt)[0];
  },
});
