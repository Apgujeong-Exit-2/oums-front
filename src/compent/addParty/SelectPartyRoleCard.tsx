import { motion } from 'framer-motion';
import { Card, Col, Row } from 'react-bootstrap';
import { cssConcat } from '../../util/stringUtil';
import css from './SelectPartyRoleCard.module.css';
import { useRecoilState } from 'recoil';
import { addPartyState } from '../../recoil/addPartyViewAtom';
import { useState } from 'react';
// @ts-ignore
import img from '../../img/slide1.png';
import RoleSvg1 from '../ui/RoleSvg1';
import RoleSvg2 from '../ui/RoleSvg2';
import RoleSvg3 from '../ui/RoleSvg3';

const SelectPartyRoleCard = () => {
  console.log('SelectPartyRoleCard');
  const [partyState, setPartyState] = useRecoilState(addPartyState);
  const [selectRole, setSelectRole] = useState('파티장');

  return (
    <Card className={'shadow overflow-hidden'}>
      <motion.div className={'flex-column'} transition={{ type: 'just' }}>
        {/* ott 카드 노출 부분 */}
        <Card.Body className={cssConcat('fw-bold', 'justify-content-between d-flex')}>
          <div>이용 역할을 선택해주세요</div>
        </Card.Body>
      </motion.div>
      <Card.Body className={'d-flex justify-content-center pt-3'}>
        <Row className={css.roleSelectCard}>
          <Col className={css.roleSelectText} onClick={() => setSelectRole('파티장')}>
            <div>파티장</div>
          </Col>
          <Col className={css.roleSelectText} onClick={() => setSelectRole('파티원')}>
            <div>파티원</div>
          </Col>
          <motion.div
            className={cssConcat('shadow', css.roleSelectBord)}
            transition={{ type: 'just' }}
            animate={{ left: selectRole === '파티장' ? 'auto' : 'calc(50% + 1px)' }}
          />
        </Row>
      </Card.Body>
      <Card.Body>
        <Card className={'shadow'}>
          <Card.Body className={'d-flex justify-content-center p-0'}>
            <div className={css.roleSvgCard}>
              {/* TODO : 파티원, 파티장 svg 구분 */}
              {/* TODO : 슬라이더(swiper)로 구성하기 */}
              {/*<RoleSvg1 />*/}
              {/*<RoleSvg2 />*/}
              <RoleSvg3 />
            </div>
          </Card.Body>
          <Card.Body>
            <Card.Text>
              4명이서 같이보면 4배 더 저렴하니깐!
              <br /> 파티장으로 시작하고 파티원을 모집해보세요.
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default SelectPartyRoleCard;
