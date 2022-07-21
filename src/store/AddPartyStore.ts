import { atom } from 'recoil';
import { ERole } from '../dto/SlideDto';

interface IState {
  isOttSelect: boolean;
  isRoleSelect: boolean;
  selectOtt: string;
  selectRole: ERole;
}

/**
 * 파티 만들기 상태값
 */
export const getAddPartyState = atom<IState>({
  key: 'party/getState',
  default: {
    isOttSelect: false,
    isRoleSelect: false,
    selectOtt: '',
    selectRole: ERole.master,
  },
});
