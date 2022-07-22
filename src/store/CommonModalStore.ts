import { atom } from 'recoil';
import React from 'react';

interface IState {
  isHide: boolean;
  children: React.ReactNode | null;
}

export const getCommonModalState = atom<IState>({
  key: 'modal/getState',
  default: {
    isHide: false,
    children: null,
  },
});
