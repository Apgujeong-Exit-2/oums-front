import { atom, selector } from 'recoil';
import { ERole } from '../dto/SlideDto';
import { getOttListData } from '../service/OttService';

interface IState {
  selectOtt: string;
  selectRole: ERole;
  isOttSelect: boolean;
}

const defaultIStateObj: IState = {
  isOttSelect: false,
  selectOtt: '',
  selectRole: ERole.master,
};

/**
 * 파티 만들기 상태값
 */
export const getAddPartyState = atom<IState>({
  key: 'party/getState',
  default: defaultIStateObj,
});

/**
 * 선택된 파티 데이터 조회
 */
export const getCurrentPartyData = selector({
  key: 'party/getCurrentPartyData',
  get: ({ get }) => {
    const { selectOtt } = get(getAddPartyState);
    const ottList = get(getOttListData);
    const data = ottList.filter((data) => data.title === selectOtt)[0];
    if (data === undefined) {
      return ottList[0];
    } else {
      return data;
    }
  },
});
