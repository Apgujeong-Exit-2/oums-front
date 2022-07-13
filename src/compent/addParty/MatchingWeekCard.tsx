import { Card } from 'react-bootstrap';

const MatchingWeekCard = () => {
  return (
    <Card>
      <div className={'d-flex'}>
        <Card.Body>최근 일주일 매칭 현황</Card.Body>
        <Card.Body className={'text-end'}>1234명</Card.Body>
      </div>
    </Card>
  );
};

export default MatchingWeekCard;
