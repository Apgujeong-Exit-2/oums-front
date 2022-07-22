import OumsCommonModalPortal from './OumsCommonModalPortal';
import { Modal } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getCommonModalState } from '../../store/CommonModalStore';
import useModal from '../../hook/useModal';

/**
 * Common Modal Layout
 */
const OumsCommonModal = () => {
  const { isHide, children } = useRecoilValue(getCommonModalState);
  const { modalClose } = useModal();

  useEffect(() => {
    console.log('OumsCommonModal');
  }, []);
  return (
    <OumsCommonModalPortal>
      <Modal
        onHide={modalClose}
        show={isHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        {children}
      </Modal>
    </OumsCommonModalPortal>
  );
};

export default OumsCommonModal;
