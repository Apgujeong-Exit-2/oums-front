import css from './AddPartyView.module.css';
import { Container } from 'react-bootstrap';
import MatchingWeekCard from '../compent/addParty/MatchingWeekCard';
import SelectOttCard from '../compent/addParty/SelectOttCard';
import GapDiv from '../compent/ui/GapDiv';
import SelectPartyRoleCard from '../compent/addParty/SelectPartyRoleCard';
import { useRecoilValue } from 'recoil';
import { getOttListService } from '../service/OttService';
import KakaoLoginButton from '../compent/button/KakaoLoginButton';
import { getCurrentAddPartySlideDataService } from '../service/SlideService';
import { getAddPartyState } from '../store/AddPartyStore';

const AddPartyView = () => {
  const ottList = useRecoilValue(getOttListService);
  const slideList = useRecoilValue(getCurrentAddPartySlideDataService); // 선택된 role(파티장, 파티원)에 따른 슬라이드 데이터
  const { isRoleSelect } = useRecoilValue(getAddPartyState);

  return (
    <div className={css.root}>
      <Container className={css.container}>
        <MatchingWeekCard />
        <GapDiv height={24} />
        <SelectOttCard ottList={ottList} />
        <GapDiv height={24} />
        <SelectPartyRoleCard slideList={slideList} />
        <GapDiv height={24} />
        {isRoleSelect && <KakaoLoginButton />}
      </Container>
    </div>
  );
};

export default AddPartyView;
