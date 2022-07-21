import { atom } from 'recoil';

interface IState {
  isHide: boolean;
}
export const getCommonModalState = atom<IState>({
  key: 'modal/getState',
  default: {
    isHide: false,
  },
});
