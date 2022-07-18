import { motion } from 'framer-motion';
import { Card, CardImg, Col, Row } from 'react-bootstrap';
import { cssConcat } from '../../util/stringUtil';
import css from './SelectPartyRoleCard.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addPartyState } from '../../recoil/addPartyViewAtom';
import { useEffect } from 'react';
import apiUtil from '../../util/apiUtil';

const SelectPartyRoleCard = () => {
  console.log('SelectPartyRoleCard');
  const [partyState, setPartyState] = useRecoilState(addPartyState);
  // const slideData = useRecoilValue(asyncSlideData);
  // console.log(slideData);

  const test = async () => {
    const response: any = await apiUtil.get('/slide');
    console.log(response);
    return response;
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <Card className={'shadow overflow-hidden'}>
      <motion.div
        className={'flex-column'}
        transition={{ type: 'just' }}
        initial={{ height: 0 }}
        animate={{ height: partyState.isOttSelect ? '100%' : 55 }}
      >
        {/* 상단 카드 제목 카드 */}
        <Card.Body className={'fw-bold justify-content-between d-flex'}>
          <div>이용 역할을 선택해주세요</div>
        </Card.Body>
        {/* 파티장, 파티원 선택 버튼 카드 */}
        <Card.Body className={'d-flex justify-content-center pt-3'}>
          <Row className={css.roleSelectCard}>
            <Col className={css.roleSelectText}>
              <div>파티장</div>
            </Col>
            <Col
              className={css.roleSelectText}
              onClick={() => setPartyState({ ...partyState, selectRole: 'member' })}
            >
              <div>파티원</div>
            </Col>
            <motion.div
              className={cssConcat('shadow', css.roleSelectBord)}
              transition={{ type: 'just' }}
              animate={{ left: partyState.selectRole === 'master' ? 'auto' : 'calc(50% + 1px)' }}
            />
          </Row>
        </Card.Body>
        {/* Role 상세 설명 카드 */}
        <Card.Body>
          <Card className={'shadow'}>
            <Card.Body className={'d-flex justify-content-center p-0'}>
              <div>
                <CardImg src={'img/addPartyMaster1.png'} className={css.roleImgCard} />
              </div>
            </Card.Body>
            <Card.Body>
              <Card.Text className={css.roleImgText}>
                4명이서 같이보면 4배 더 저렴하니깐!
                <br /> 파티장으로 시작하고 파티원을 모집해보세요.
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default SelectPartyRoleCard;
