import { Button, Card, Col, Row } from 'react-bootstrap';
import css from './SelectOttCard.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GapDiv from '../ui/GapDiv';
import { cssConcat } from '../../util/stringUtil';
import { IOtt } from '../../view/AddPartyView';
import { useRecoilState } from 'recoil';
import { addPartyState } from '../../recoil/addPartyViewAtom';

interface IProps {
  otts: IOtt[];
}

// TODO : 카드 클릭시 2번씩 실행됨 처리 요망
const SelectOttCard = (props: IProps) => {
  console.log('SelectOttCard');
  const [selectOtt, setSelectOtt] = useState(''); // 선택된 ott 종류
  const [cardHeight, setCardHeight] = useState(275); // 카드 높이
  const [partyState, setPartyState] = useRecoilState(addPartyState);

  // ott 카드 리스트
  const ottTsx = props.otts.map((data, index) => (
    <Col
      className={'text-center ' + css.ottCol}
      key={data.key}
      onClick={() => setSelectOtt(data.title)}
    >
      <Card
        className={
          'align-items-center ' +
          (selectOtt === data.title ? css.ottImageCardActive : css.ottImageCard)
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
    } else if (selectOtt !== '') {
      setCardHeight(432);
    } else if (selectOtt === '') {
      setCardHeight(275);
    }
  };

  useEffect(() => {
    console.log('SelectOttCard useEffect');
    cardHeightSettingHandler();
  }, [selectOtt, partyState.isOttSelect]);

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
        {/* TODO : props 데이터 뿌려주기 */}
        <div className={'justify-content-center d-flex pt-3'}>
          <Card className={cssConcat(css.ottInfo)}>
            <Card.Img
              src={'img/ott_info.png'}
              alt='emoji_money_bundle_flat'
              className={css.ottInfoImage}
            />
            <GapDiv width={16} />
            <div>
              <small className={css.ottInfoTitle}>라프텔 프리미엄</small>
              <div className={'justify-content-center d-flex'}>
                <p
                  className={cssConcat(
                    'text-decoration-line-through',
                    'text-secondary',
                    css.ottInfoOriginPrice,
                  )}
                >
                  14.000원
                </p>
                <p className={css.ottInfoSalePrice}>&nbsp;→&nbsp;</p>
                <p className={css.ottInfoSalePrice}> 3,725원</p>
              </div>
            </div>
            <GapDiv width={16} />
            <div>
              <small className={css.ottInfoTitle}>수수료</small>
              <div className={'justify-content-center d-flex'}>
                <p className={css.ottInfoOriginPrice}>파티장 490원</p>
                <p className={css.ottInfoSalePrice}>&nbsp;|&nbsp;</p>
                <p className={css.ottInfoSalePrice}>파티원 990원</p>
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
