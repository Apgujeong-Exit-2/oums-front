import { atom } from 'recoil';

interface IState {
  isOttSelect: boolean;
  isRoleSelect: boolean;
  selectOtt: string;
  selectRole: string;
}

export const addPartyState = atom<IState>({
  key: 'addPartyState',
  default: {
    isOttSelect: false,
    isRoleSelect: false,
    selectOtt: '',
    selectRole: '',
  },
});
