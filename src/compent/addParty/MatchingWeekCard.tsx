import { Card } from 'react-bootstrap';

/**
 * 파티 만들기 페이지 - 최근 일주일 매칭 현황
 * @constructor
 */
const MatchingWeekCard = () => {
  return (
    <Card className={'shadow-sm'}>
      <div className={'d-flex'}>
        <Card.Body>최근 일주일 매칭 현황</Card.Body>
        <Card.Body className={'text-end'}>1234명</Card.Body>
      </div>
    </Card>
  );
};

export default MatchingWeekCard;
