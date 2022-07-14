import { Button, Card, Col, Row } from 'react-bootstrap';
import css from './SelectOttCard.module.css';
import { useEffect, useState } from 'react';
import { Ott } from '../../view/AddPartyView';
import { motion } from 'framer-motion';
// @ts-ignore
import img from '../../img/ott_info.png';
import GapDiv from '../ui/GapDiv';
import { cssConcat } from '../../util/stringUtil';

interface props {
  otts: Ott[];
}

const SelectOttCard = (props: props) => {
  console.log('SelectOttCard');
  const [curr, setCurr] = useState<string>('');
  const [isNext, setIsNext] = useState(false);
  const [cardHeight, setCardHeight] = useState(275);

  useEffect(() => {
    if (isNext) {
      setCardHeight(55);
    } else if (curr !== '') {
      setCardHeight(432);
    } else if (curr === '') {
      setCardHeight(275);
    }
  }, [curr, isNext]);

  // ott 카드 map
  const ottTsx = props.otts.map((data, index) => (
    <Col className={'text-center ' + css.ottCol} key={data.key} onClick={() => setCurr(data.title)}>
      <Card
        className={
          'align-items-center ' + (curr === data.title ? css.ottImageCardActive : css.ottImageCard)
        }
      >
        <Card.Img variant='top' src={data.imageUrl} className={css.ottImage} />
        <Card.Body className={css.ottImageText}>
          <Card.Text className={css.ottImageTitle}>{data.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

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
          <div className={css.ottChangeButton}>변경</div>
        </Card.Body>
        <Card.Body>
          <Row>{ottTsx.slice(0, 3)}</Row>
          <Row>{ottTsx.slice(3, 6)}</Row>
        </Card.Body>
        {/* ott 가격 설명 부분 */}
        {/* TODO : props 데이터 뿌려주기 */}
        <div className={'justify-content-center d-flex pt-3'}>
          <Card className={cssConcat(css.ottInfo)}>
            <Card.Img src={img} alt='emoji_money_bundle_flat' className={css.ottInfoImage} />
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
          <Button className={css.ottInfoButton} variant={''} onClick={() => setIsNext(true)}>
            다음
          </Button>
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default SelectOttCard;
