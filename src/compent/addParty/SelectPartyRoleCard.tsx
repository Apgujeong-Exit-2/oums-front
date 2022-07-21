import { motion } from 'framer-motion';
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap';
import { cssConcat } from '../../util/stringUtil';
import css from './SelectPartyRoleCard.module.css';
import { useRecoilState } from 'recoil';
import { getAddPartyState } from '../../store/AddPartyStore';
import { ERole } from '../../dto/SlideDto';
import OumsCommonButton from '../ui/OumsCommonButton';

/**
 * 파티 만들기 페이지 - 이용 역할 선택 카드
 * @constructor
 */
const SelectPartyRoleCard = () => {
  const [partyState, setPartyState] = useRecoilState(getAddPartyState);

  const test = () => {
    console.log('test');
  };

  return (
    <Card className={'shadow overflow-hidden'}>
      <motion.div
        className={'flex-column'}
        transition={{ type: 'just' }}
        initial={{ height: 0 }}
        animate={{ height: partyState.isOttSelect ? '100%' : 55 }}
      >
        {/* 상단 카드 제목 카드 */}
        <Card.Body
          className={cssConcat(css.roleMainTitle, 'fw-bold justify-content-between d-flex')}
        >
          <div>이용 역할을 선택해주세요</div>
        </Card.Body>
        {/* 파티장, 파티원 선택 버튼 카드 */}
        <Card.Body className={'d-flex justify-content-center pt-3'}>
          <Row className={css.roleSelectCard}>
            <Col
              className={css.roleSelectText}
              onClick={() => setPartyState({ ...partyState, selectRole: ERole.master })}
            >
              <div>파티장</div>
            </Col>
            <Col
              className={css.roleSelectText}
              onClick={() => setPartyState({ ...partyState, selectRole: ERole.member })}
            >
              <div>파티원</div>
            </Col>
            <motion.div
              className={cssConcat('shadow', css.roleSelectBord)}
              transition={{ type: 'just' }}
              animate={{
                left: partyState.selectRole === ERole.master ? 'auto' : 'calc(50% + 1px)',
              }}
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
            <Card.Body className={'d-flex justify-content-end'}>
              <Button className={css.roleSlideButton} variant={''}>
                다음
              </Button>
            </Card.Body>
          </Card>
        </Card.Body>
        {/* Role 특징 설명 카드 */}
        <Card.Body>
          <Card>
            <Card.Body className={css.roleSlideContent}>
              <Card.Text className={css.roleSlideContentTitle}>
                🚨 파티에 문제가 발생해도 즉시 해결해줘요
              </Card.Text>
              <Card.Text className={css.roleSlideContentText}>
                ▪ 파티 문제 발생시
                <span className={css.roleSlideContentSubText}> 남은 기간만큼 100% 환불</span> 가능
              </Card.Text>
              <Card.Text className={css.roleSlideContentText}>
                ▪ 파티가 해체돼도
                <span className={css.roleSlideContentSubText}> 최우선순위</span>로 새로운 파티
                재매칭
              </Card.Text>
              <Card.Text className={css.roleSlideContentText}>
                ▪ 365일 연중무휴
                <span className={css.roleSlideContentSubText}> 고객센터</span> 운영중
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Body>
        <Card.Body>
          <OumsCommonButton onClick={test}>파티원으로 월 4,444원에 이용하기</OumsCommonButton>
          {/*<Button variant={''} className={css.roleNextButton}>*/}
          {/*  파티원으로 월 4,444원에 이용하기*/}
          {/*</Button>*/}
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default SelectPartyRoleCard;
