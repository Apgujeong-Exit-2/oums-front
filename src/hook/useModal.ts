import { useSetRecoilState } from 'recoil';
import { getCommonModalState } from '../store/CommonModalStore';
import React from 'react';

/**
 * commonModal 커스텀 훅
 */
const useModal = () => {
  const setModalState = useSetRecoilState(getCommonModalState);
  const modalOpen = (children: React.ReactNode) => {
    setModalState({ isHide: true, children: children });
  };

  const modalClose = () => {
    setModalState({ isHide: false, children: null });
  };

  return { modalOpen, modalClose };
};

export default useModal;
