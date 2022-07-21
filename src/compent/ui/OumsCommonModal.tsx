import OumsCommonPortal from './OumsCommonPortal';
import { Modal } from 'react-bootstrap';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getCommonModalState } from '../../store/CommonModalStore';

const OumsCommonModal = (props: {}) => {
  const { isHide } = useRecoilValue(getCommonModalState);

  useEffect(() => {
    console.log('OumsCommonModal');
  }, []);
  return (
    <OumsCommonPortal>
      <Modal
        show={isHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      ></Modal>
    </OumsCommonPortal>
  );
};

export default OumsCommonModal;
