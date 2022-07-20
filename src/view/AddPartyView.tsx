import css from './AddPartyView.module.css';
import { Container } from 'react-bootstrap';
import MatchingWeekCard from '../compent/addParty/MatchingWeekCard';
import SelectOttCard from '../compent/addParty/SelectOttCard';
import GapDiv from '../compent/ui/GapDiv';
import SelectPartyRoleCard from '../compent/addParty/SelectPartyRoleCard';
import { useRecoilValue } from 'recoil';
import { getOttListData } from '../service/OttService';

const AddPartyView = () => {
  const ottList = useRecoilValue(getOttListData);

  return (
    <div className={css.root}>
      <Container className={css.container}>
        <MatchingWeekCard />
        <GapDiv height={24} />
        <SelectOttCard otts={ottList} />
        <GapDiv height={24} />
        <SelectPartyRoleCard />
      </Container>
    </div>
  );
};

export default AddPartyView;
