import { atom } from 'recoil';

export const addPartyState = atom({
  key: 'addPartyState',
  default: {
    isOttSelect: false,
  },
});

export const ottSelect = atom({
  key: 'ottSelect',
  default: false,
});
