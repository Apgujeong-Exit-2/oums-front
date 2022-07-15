import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
import { cssConcat } from '../../util/stringUtil';

const SelectPartyRoleCard = () => {
  console.log('SelectPartyRoleCard');

  return (
    <Card className={'shadow overflow-hidden'}>
      <motion.div className={'flex-column'} transition={{ type: 'just' }}>
        {/* ott 카드 노출 부분 */}
        <Card.Body className={cssConcat('fw-bold', 'justify-content-between d-flex')}>
          <div>이용 역할을 선택해주세요</div>
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default SelectPartyRoleCard;
