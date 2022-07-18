import { atom, selector } from 'recoil';
import apiUtil from '../util/apiUtil';

interface IState {
  isOttSelect: boolean;
  isRoleSelect: boolean;
  selectOtt: string;
  selectRole: 'member' | 'master';
}

export const addPartyState = atom<IState>({
  key: 'addPartyState',
  default: {
    isOttSelect: false,
    isRoleSelect: false,
    selectOtt: '',
    selectRole: 'master',
  },
});

// ============================================================ //
interface ISlide {
  id: number;
  imgUrl: string;
  detailText: string;
  roleType: 'member' | 'master';
}

// TODO : api 호출로 변경 요망
const getSlideData: ISlide[] = [
  {
    id: 1,
    imgUrl: 'img/addPartyMember1.png',
    detailText: '4명이서 같이보면 4배 더 저렴하니깐\b파티원으로 파티를 매칭받아보세요.',
    roleType: 'member',
  },
  {
    id: 2,
    imgUrl: 'img/addPartyMember2.png',
    detailText: '결제카드를 등록하면 매칭준비 끝!\n결제는 매칭이 완료되면 자동으로 진행돼요.',
    roleType: 'member',
  },
  {
    id: 3,
    imgUrl: 'img/addPartyMember3.png',
    detailText: '파티 매칭이 완료되면\n즉시 티빙 ID/PW를 확인할 수 있어요',
    roleType: 'member',
  },
  {
    id: 4,
    imgUrl: 'img/addPartyMaster1.png',
    detailText: '4명이서 같이보면 4배 더 저렴하니깐!\n파티장으로 시작하고 파티원을 모집해보세요.',
    roleType: 'master',
  },
  {
    id: 5,
    imgUrl: 'img/addPartyMaster2.png',
    detailText: '티빙 프리미엄 이용권 구독중인 계정을 준비하고,\n티빙 파티에 계정을 등록하면 끝!',
    roleType: 'master',
  },
  {
    id: 6,
    imgUrl: 'img/addPartyMaster3.png',
    detailText:
      '파티생성 후 파티원을 자동매칭 받아요.\n혹은 파티원을 직접초대해서 서로할인 받을 수 있어요.',
    roleType: 'master',
  },
];
