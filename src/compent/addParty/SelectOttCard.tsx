import { Card, Col, Row } from 'react-bootstrap';
import css from './SelectOttCard.module.css';
import { useState } from 'react';

interface ott {
  key: number;
  title: string;
  url: string;
}

interface props {
  ott: ott[];
}

const SelectOttCard = (props: props) => {
  const [curr, setCurr] = useState<string>('넷플릭스');

  const ottTsx = props.ott.map((data, index) => (
    <Col className={'text-center ' + css.ottCol} key={data.key} onClick={() => setCurr(data.title)}>
      <Card
        className={
          'align-items-center ' + (curr === data.title ? css.ottImageCardActive : css.ottImageCard)
        }
      >
        <Card.Img variant='top' src={data.url} className={css.ottImage} />
        <Card.Body className={css.ottImageText}>
          <Card.Text>{data.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Card className={'shadow'}>
      <div className={'flex-column'}>
        <Card.Body className={'fs-5 fw-bold'}>보고싶은 OTT를 선택해주세요</Card.Body>
        <Card.Body>
          <Row>{ottTsx.slice(0, 3)}</Row>
          <Row>{ottTsx.slice(3, 6)}</Row>
        </Card.Body>
      </div>
    </Card>
  );
};

export default SelectOttCard;
