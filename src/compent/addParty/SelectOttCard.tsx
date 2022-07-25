import { Button, Card, Col, Row } from 'react-bootstrap';
import css from './SelectOttCard.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GapDiv from '../ui/GapDiv';
import { comma, cssConcat } from '../../util/stringUtil';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getAddPartyState, getCurrentPartyData } from '../../store/AddPartyStore';
import { IOttResponse } from '../../dto/OttDto';

/**
 * 파티 만들기 페이지 - OTT 선택 카드
 * @constructor
 */
interface IProps {
  ottList: IOttResponse[];
}

const SelectOttCard = (props: IProps) => {
  const [partyState, setPartyState] = useRecoilState(getAddPartyState);
  const [cardHeight, setCardHeight] = useState(275); // 카드 높이
  const currentPartyData = useRecoilValue(getCurrentPartyData);

  // ott 카드 리스트
  const ottTsx = props.ottList.map((data, index) => (
    <Col
      className={'text-center ' + css.ottCol}
      key={data.id}
      onClick={() => setPartyState({ ...partyState, selectOtt: data.title })}
    >
      <Card
        className={
          'align-items-center ' +
          (partyState.selectOtt === data.title ? css.ottImageCardActive : css.ottImageCard)
        }
      >
        <Card.Img variant='top' src={data.imageUrl} className={css.ottImage} />
        <Card.Body className={css.ottImageText}>
          <Card.Text className={css.ottImageTitle}>{data.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  // card 높이 셋팅 함수
  const cardHeightSettingHandler = () => {
    if (partyState.isOttSelect) {
      setCardHeight(55);
    } else if (partyState.selectOtt !== '') {
      setCardHeight(432);
    } else if (partyState.selectOtt === '') {
      setCardHeight(275);
    }
  };

  useEffect(() => {
    cardHeightSettingHandler();
  }, [cardHeightSettingHandler]);

  return (
    <Card className={'shadow overflow-hidden'}>
      <motion.div
        className={'flex-column'}
        transition={{ type: 'just' }}
        initial={{ height: 0 }}
        animate={{ height: cardHeight }}
      >
        {/* ott 카드 노출 부분 */}
        <Card.Body className={cssConcat('fw-bold', css.ottTitle, 'justify-content-between d-flex')}>
          <div>보고싶은 OTT를 선택해주세요</div>
          {partyState.isOttSelect && (
            <div
              className={css.ottChangeButton}
              onClick={() => setPartyState({ ...partyState, isOttSelect: false })}
            >
              변경
            </div>
          )}
        </Card.Body>
        <Card.Body>
          <Row>{ottTsx.slice(0, 3)}</Row>
          <Row>{ottTsx.slice(3, 6)}</Row>
        </Card.Body>
        {/* ott 가격 설명 부분 */}
        <div className={'justify-content-center d-flex pt-3'}>
          <Card className={cssConcat(css.ottInfo)}>
            <Card.Img
              src={'img/ott_info.png'}
              alt='emoji_money_bundle_flat'
              className={css.ottInfoImage}
            />
            <GapDiv width={16} />
            <div>
              <small className={css.ottInfoTitle}>{currentPartyData?.title}</small>
              <div className={'justify-content-center d-flex'}>
                <p
                  className={cssConcat(
                    'text-decoration-line-through',
                    'text-secondary',
                    css.ottInfoOriginPrice,
                  )}
                >
                  {comma(currentPartyData?.originPrice)}원
                </p>
                <p className={css.ottInfoSalePrice}>&nbsp;→&nbsp;</p>
                <p className={css.ottInfoSalePrice}> {comma(currentPartyData?.salePrice)}원</p>
              </div>
            </div>
            <GapDiv width={16} />
            <div>
              <small className={css.ottInfoTitle}>수수료</small>
              <div className={'justify-content-center d-flex'}>
                <p className={css.ottInfoOriginPrice}>
                  파티장 {comma(currentPartyData?.partyHallFee)}원
                </p>
                <p className={css.ottInfoSalePrice}>&nbsp;|&nbsp;</p>
                <p className={css.ottInfoSalePrice}>
                  파티원 {comma(currentPartyData?.partyMemberFee)}원
                </p>
              </div>
            </div>
          </Card>
        </div>
        <Card.Body>
          <Button
            className={css.ottInfoButton}
            variant={''}
            onClick={() => setPartyState({ ...partyState, isOttSelect: true })}
          >
            다음
          </Button>
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default SelectOttCard;
