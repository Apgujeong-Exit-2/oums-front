import css from './AddPartyView.module.css';
import { Container } from 'react-bootstrap';
import MatchingWeekCard from '../compent/addParty/MatchingWeekCard';
import SelectOttCard from '../compent/addParty/SelectOttCard';
import GapDiv from '../compent/ui/GapDiv';
import SelectPartyRoleCard from '../compent/addParty/SelectPartyRoleCard';
import { useRecoilState } from 'recoil';
import { addPartyState } from '../recoil/addPartyViewAtom';

export interface IOtt {
  key: number; // key
  title: string; // ott 이름
  imageUrl: string; // 이미지 경로
  originPrice: number; // 실제가
  salePrice: number; // 할인가
  partyHallFee: number; // 파티장 수수료
  partyMemberFee: number; // 파티원 수수료
}

// TODO : 추후 DB 에서?
const ottList: IOtt[] = [
  {
    key: 1,
    title: '넷플릭스',
    imageUrl: 'https://asset.pickle.plus/ott_logo/icon_netflix_x2.png',
    originPrice: 17000,
    salePrice: 4250,
    partyHallFee: 490,
    partyMemberFee: 990,
  },
  {
    key: 2,
    title: '웨이브',
    imageUrl: 'https://asset.pickle.plus/ott_logo/icon_wavve_x2.png',
    originPrice: 13900,
    salePrice: 3475,
    partyHallFee: 490,
    partyMemberFee: 990,
  },
  {
    key: 3,
    title: '왓챠',
    imageUrl: 'https://asset.pickle.plus/ott_logo/icon_watcha_x2.png',
    originPrice: 12900,
    salePrice: 3225,
    partyHallFee: 490,
    partyMemberFee: 990,
  },
  {
    key: 4,
    title: '라프텔',
    imageUrl: 'https://asset.pickle.plus/ott_logo/icon_laftel_x2.png',
    originPrice: 14900,
    salePrice: 3725,
    partyHallFee: 490,
    partyMemberFee: 990,
  },
  {
    key: 5,
    title: '티빙',
    imageUrl: 'https://asset.pickle.plus/ott_logo/icon_tving_x2.png',
    originPrice: 13900,
    salePrice: 3475,
    partyHallFee: 490,
    partyMemberFee: 990,
  },
  {
    key: 6,
    title: '디즈니+',
    imageUrl: 'https://asset.pickle.plus/ott_logo/icon_disney_x2.png',
    originPrice: 9900,
    salePrice: 2475,
    partyHallFee: 490,
    partyMemberFee: 990,
  },
]; // ottList

const AddPartyView = () => {
  const [partyState, setPartyState] = useRecoilState(addPartyState);
  console.log('addPartyView');
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
