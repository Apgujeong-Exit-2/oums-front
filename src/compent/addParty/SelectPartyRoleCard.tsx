import { motion } from 'framer-motion';
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap';
import { comma, cssConcat } from '../../util/stringUtil';
import css from './SelectPartyRoleCard.module.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getAddPartyState, getCurrentPartyData } from '../../store/AddPartyStore';
import { ERole, ISlideResponse } from '../../dto/SlideDto';
import OumsCommonButton from '../button/OumsCommonButton';
import { useState } from 'react';

/**
 * 파티 만들기 페이지 - 이용 역할 선택 카드
 * @constructor
 */
interface IProps {
  slideList: ISlideResponse[];
}
const SelectPartyRoleCard = ({ slideList }: IProps) => {
  const [partyState, setPartyState] = useRecoilState(getAddPartyState); // 파티 만들기 전체 상태 데이터
  const { salePrice } = useRecoilValue(getCurrentPartyData); // 선택된 ott 가격 데이터
  const [slideIndex, setSlideIndex] = useState(0); // 슬라이드 현재 count

  // 다음 버튼
  const nextPageClickHandler = () => {
    // TODO : 로그인 체크 > 카드 등록 페이지로 이동
    setPartyState({ ...partyState, isRoleSelect: true });
    console.log(partyState);
  };

  // 파티장, 파티원 버튼
  const roleClickHandler = (type: ERole) => {
    setPartyState({ ...partyState, selectRole: type });
    setSlideIndex(0);
  };

  // 슬라이드 이미지 클릭 이벤트
  const slideImagePagingClickHandler = (count: number) => {
    setSlideIndex((prevState) => prevState + count);
  };

  return (
    <Card className={'shadow overflow-hidden'}>
      <motion.div
        className={'flex-column'}
        transition={{ type: 'just' }}
        initial={{ height: 0 }}
        animate={{ height: partyState.isOttSelect && !partyState.isRoleSelect ? '100%' : 55 }}
      >
        {/* 상단 카드 제목 카드 */}
        <Card.Body
          className={cssConcat(css.roleMainTitle, 'fw-bold justify-content-between d-flex')}
        >
          <div>이용 역할을 선택해주세요</div>
          {partyState.isRoleSelect && (
            <div
              className={css.roleChangeButton}
              onClick={() => setPartyState({ ...partyState, isRoleSelect: false })}
            >
              다시 보기
            </div>
          )}
        </Card.Body>
        {/* 파티장, 파티원 선택 버튼 카드 */}
        <Card.Body className={'d-flex justify-content-center pt-3'}>
          <Row className={css.roleSelectCard}>
            <Col className={css.roleSelectText} onClick={() => roleClickHandler(ERole.master)}>
              <div>파티장</div>
            </Col>
            <Col className={css.roleSelectText} onClick={() => roleClickHandler(ERole.member)}>
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
                <CardImg src={slideList[slideIndex].imgPath} className={css.roleImgCard} />
              </div>
            </Card.Body>
            <Card.Body>
              <Card.Text
                className={css.roleImgText}
                dangerouslySetInnerHTML={{
                  __html: slideList[slideIndex].detailText.replace(/\n/g, '<br/>'),
                }}
              />
            </Card.Body>
            <Card.Body className={'d-flex justify-content-between'}>
              <Button
                className={slideIndex !== 0 ? css.roleSlideButton : css.roleSlideButtonHidden}
                variant={''}
                onClick={() => slideImagePagingClickHandler(-1)}
              >
                이전
              </Button>
              <Button
                className={
                  slideList.length !== slideIndex + 1
                    ? css.roleSlideButton
                    : css.roleSlideButtonHidden
                }
                variant={''}
                onClick={() => slideImagePagingClickHandler(1)}
              >
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
          <OumsCommonButton
            style={{ width: '100%', height: '45px' }}
            onClick={nextPageClickHandler}
            text={`파티원으로 월 ${comma(salePrice)}원에 이용하기`}
          />
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default SelectPartyRoleCard;
